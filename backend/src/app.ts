import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookingsRouter from './routes/bookings';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import winston from 'winston';

dotenv.config();

const app = express();
app.use(express.json());

// Winston logger setup
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

// CORS setup
const allowedOrigin = process.env.CORS_ORIGIN || 'http://localhost:8080';
app.use(cors({ origin: allowedOrigin, credentials: true }));

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: 'Too many login attempts, please try again later.'
});

// Example: apply to /api/auth/* endpoints
app.use('/api/auth/', authLimiter);

// Logging middleware
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url, ip: req.ip });
  next();
});

app.use('/api/bookings', bookingsRouter);

// Enforce HTTPS in production
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  });
}

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ashus_cut_and_shop';

mongoose.connect(MONGODB_URI)
  .then(() => {
    logger.info('Connected to MongoDB');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    logger.error('MongoDB connection error:', err);
  });

// Global error handler
app.use((err, req, res, next) => {
  logger.error(err);
  const isProd = process.env.NODE_ENV === 'production';
  res.status(500).json({ error: isProd ? 'Internal server error' : err.message });
});

export default app; 
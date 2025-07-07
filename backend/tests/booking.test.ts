import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import request from 'supertest';
import express from 'express';
import bookingsRouter from '../src/routes/bookings';
import Booking from '../src/models/Booking';

const app = express();
app.use(express.json());
app.use('/api/bookings', bookingsRouter);

let mongoServer: MongoMemoryServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Booking.deleteMany({});
});

describe('Bookings API', () => {
  it('should create a booking', async () => {
    const res = await request(app)
      .post('/api/bookings')
      .send({ name: 'Test User', date: new Date(), service: 'Haircut' });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Test User');
  });

  it('should get all bookings', async () => {
    await Booking.create({ name: 'Test User', date: new Date(), service: 'Haircut' });
    const res = await request(app).get('/api/bookings');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
}); 
# Backend for Ashus Cut and Shop

## Setup

1. Copy `.env.example` to `.env` and set your MongoDB URI, PORT, CORS_ORIGIN, and JWT_SECRET.
2. Install dependencies:
   ```sh
   npm install
   ```

## Development

Start the backend server with:
```sh
npm run dev
```

## Production

Build and start the server:
```sh
npm run build
npm start
```

## Testing

Run tests (uses in-memory MongoDB):
```sh
npm test
```

## Security & Production Checklist

- [ ] Use strong, unique secrets in `.env` (especially `JWT_SECRET`).
- [ ] Restrict `CORS_ORIGIN` to your production frontend domain.
- [ ] Enable authentication and strong passwords for MongoDB.
- [ ] Restrict MongoDB network access to trusted IPs only.
- [ ] Enforce HTTPS in production (use a reverse proxy or cloud provider).
- [ ] Regularly back up your database.
- [ ] Monitor logs for suspicious activity (see `logs/app.log`).
- [ ] Regularly run `npm audit` and update dependencies.
- [ ] Never expose stack traces to the client in production.
- [ ] Use a process manager (e.g., PM2) for backend in production.
- [ ] Sanitize all user input using the provided `sanitizeInput` utility in `src/utils/sanitize.ts`. 
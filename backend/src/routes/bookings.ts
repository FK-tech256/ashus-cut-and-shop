import express from 'express';
import Booking from '../models/Booking';

const router = express.Router();

// Get all bookings
router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// Create a booking
router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
});

export default router; 
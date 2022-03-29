import { EntitySchema } from 'typeorm';
import { Booking } from './booking.entity';

export const BookingSchema = new EntitySchema<Booking>({
  name: 'Booking',
  target: Booking,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    from: {
      type: Date,
    },
    to: {
      type: Date,
    },
    booking_price: {
      type: Number,
    },
  },
  relations: {
    user: {
      type: 'one-to-one',
      target: 'User',
    },
    room: {
      type: 'one-to-one',
      target: 'Room',
    },
  },
});

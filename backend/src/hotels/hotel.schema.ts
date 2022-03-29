import { EntitySchema } from 'typeorm';
import { Hotel } from './hotel.entity';

export const HotelSchema = new EntitySchema<Hotel>({
  name: 'Hotel',
  target: Hotel,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  relations: {
    rooms: {
      type: 'one-to-many',
      target: 'Room',
    },
  },
});

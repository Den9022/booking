import { EntitySchema } from 'typeorm';
import { Room } from './room.entity';

export const RoomSchema = new EntitySchema<Room>({
  name: 'Room',
  target: Room,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    price: {
      type: Number,
    },
    available: {
      type: Boolean,
    },
    hotel: {
      type: Number,
    },
  },
  relations: {
    hotel: {
      type: 'many-to-one',
      target: 'Hotel',
      joinColumn: {
        name: 'hotel',
      },
    },
  },
});

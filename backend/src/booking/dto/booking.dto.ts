import { Room } from 'src/rooms/room.entity';

export class BookingDto {
  id: number;

  booking_price: number;

  from: Date;

  to: Date;

  room: Room;
}

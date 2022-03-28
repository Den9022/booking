import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MinLength, IsNumber } from 'class-validator';
import { Hotel } from 'src/hotels/hotel.entity';
import { Booking } from 'src/booking/booking.entity';
@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  price: number;

  @OneToOne(() => Booking, (booking) => booking.room)
  booking: Booking;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  hotel: Hotel;
}

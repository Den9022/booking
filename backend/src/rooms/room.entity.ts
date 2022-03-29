import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MinLength, IsNumber } from 'class-validator';
import { Hotel } from '../hotels/hotel.entity';
import { Booking } from '../booking/booking.entity';
@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  price: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  @JoinColumn({ name: 'hotelId', referencedColumnName: 'id' })
  hotel: Hotel;
}

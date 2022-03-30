import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { MinLength, IsNumber, IsBoolean } from 'class-validator';
import { Hotel } from '../hotels/hotel.entity';
import { Booking } from 'src/booking/booking.entity';
@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @IsNumber()
  price: number;

  @Column()
  @IsBoolean()
  available: boolean;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms)
  @JoinColumn([{ name: 'hotel', referencedColumnName: 'id' }])
  @Column()
  hotel: number;
}

import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Booking } from 'src/booking/booking.entity';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  email: string;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  password: string;

  @OneToOne(() => Booking, (booking) => booking.user)
  booking: Booking;
}

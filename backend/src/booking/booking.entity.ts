import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { MinLength, IsNumber, IsDate, IsString } from 'class-validator';
import { User } from '../users/user.entity';
import { Room } from '../rooms/room.entity';
@Entity()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNumber()
  booking_price: number;

  @Column()
  @IsString()
  from: string;

  @Column()
  @IsString()
  to: string;

  @OneToOne(() => Room)
  @JoinColumn()
  room: Room;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

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
  @IsDate()
  from: Date;

  @Column()
  @IsDate()
  to: Date;

  @OneToOne(() => Room)
  @JoinColumn()
  room: Room;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

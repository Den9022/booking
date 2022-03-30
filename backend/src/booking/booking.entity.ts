import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { IsNumber, IsDate } from 'class-validator';
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

  @OneToOne(() => Room, (room) => room.id)
  @JoinColumn([{ name: 'room', referencedColumnName: 'id' }])
  @Column()
  room: number;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn([{ name: 'user', referencedColumnName: 'id' }])
  @Column()
  user: number;
}

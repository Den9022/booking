import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';
import { Room } from 'src/rooms/room.entity';

@Entity()
export class Hotel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  title: string;

  @Column()
  @MinLength(1)
  @IsString()
  description: string;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}

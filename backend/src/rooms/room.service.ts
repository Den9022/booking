import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private roomsRepository: Repository<Room>,
  ) {}

  async list(): Promise<Room[]> {
    const rooms = await this.roomsRepository.find({
      where: [{ occupied_from: IsNull() }],
    });

    const roomVOs: Room[] = [];

    return roomVOs;
  }

  findOne(id: string): Promise<Room> {
    return this.roomsRepository.findOne(id);
  }
}

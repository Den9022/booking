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

  async list(from, to): Promise<Room[]> {
    const rooms = await this.roomsRepository.find({
      where: {
        available: true,
      },
    });

    from = new Date(from);
    to = new Date(to);
    const Difference_In_Time = to.getTime() - from.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    rooms.map((room) => {
      room.price = room.price * Difference_In_Days;
      return room;
    });
    return rooms;
  }

  findOne(id: string | number): Promise<Room> {
    return this.roomsRepository.findOne(id);
  }

  setUnavailable(id: string | number) {
    this.roomsRepository.update(id, {
      ...{ available: false },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { getRepository } from 'typeorm';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository = getRepository(Hotel),
  ) {}

  list(): Promise<Hotel[]> {
    return this.hotelRepository.find();
  }

  findOne(id: string): Promise<Hotel> {
    return this.hotelRepository.findOne(id);
  }
}

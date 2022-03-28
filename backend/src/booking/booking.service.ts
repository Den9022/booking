import { Injectable } from '@nestjs/common';
//import { RoomsService } from 'src/rooms/room.service';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}

  async booking(roomId: string, from: string, to: string) {
    // const room = await this.roomService.findOne(roomId);
    const booking = Booking.create({
      from: from,
      to: to,
      booking_price: this.calculatePrice(123),
    });
    Booking.save(booking);
  }

  calculatePrice(price) {
    return price + price - price;
  }

  removeBooking(bookingId) {
    this.bookingRepository.delete(bookingId);
  }

  async createBooking(booking: Booking) {
    return this.bookingRepository.save(booking);
  }
}

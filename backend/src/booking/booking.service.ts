import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsService } from 'src/rooms/room.service';
import { UsersService } from 'src/users/user.service';
import { AuthService } from 'src/auth/auth.service';
@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    private roomService: RoomsService,
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }
  removeBooking(bookingId) {
    this.bookingRepository.delete(bookingId);
  }

  async createBooking(booking: Partial<Booking>) {
    const room = await this.roomService.findOne(booking.room.id);
    const newBooking = new Booking();
    const from = new Date(booking.from);
    const to = new Date(booking.to);
    const Difference_In_Time = to.getTime() - from.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    newBooking.booking_price = room.price * Difference_In_Days;
    newBooking.from = from;
    newBooking.to = to;
    newBooking.room = room;
    newBooking.user = await this.userService.findOne(
      this.authService.loggedInUser,
    );

    this.roomService.setUnavailable(room.id);

    return this.bookingRepository.save(newBooking);
  }
}

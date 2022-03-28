import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() booking: Booking) {
    return await this.bookingService.createBooking(booking);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.bookingService.removeBooking(id);
  }
}

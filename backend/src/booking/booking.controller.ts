import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
@Controller('booking')
@UseGuards(JwtAuthGuard)
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

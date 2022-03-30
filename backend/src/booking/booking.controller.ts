import {
  Body,
  Controller,
  Delete,
  Get,
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

  @Get('list')
  findAll() {
    return this.bookingService.findAll();
  }
  @Post()
  async create(@Body() booking: Partial<Booking>) {
    return await this.bookingService.createBooking(booking);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id) {
    this.bookingService.removeBooking(id);
  }
}

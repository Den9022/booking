import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Booking } from 'src/booking/booking.entity';
import { RoomsService } from './room.service';
@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class RoomController {
  constructor(private roomService: RoomsService) {}

  @Post('list')
  list(@Body() params: Partial<Booking>) {
    return this.roomService.list(params.from, params.to);
  }
}

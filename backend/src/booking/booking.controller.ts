import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Booking } from './booking.entity';
import { BookingService } from './booking.service';
@Controller('booking')
@UseGuards(JwtAuthGuard)
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiBearerAuth('defaultBearerAuth')
  @Get('list')
  findAll() {
    return this.bookingService.findAll();
  }
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        from: {
          type: 'string',
          example: '2022-01-01',
        },
        to: {
          type: 'string',
          example: '2022-01-07',
        },
        room: {
          type: 'number',
          example: 1,
        },
      },
    },
  })
  @ApiBearerAuth('defaultBearerAuth')
  @Post()
  async create(@Body() booking: Partial<Booking>) {
    return await this.bookingService.createBooking(booking);
  }
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 1,
        },
      },
    },
  })
  @ApiBearerAuth('defaultBearerAuth')
  @Post('delete')
  remove(@Body() params) {
    this.bookingService.removeBooking(params.id);
  }
}

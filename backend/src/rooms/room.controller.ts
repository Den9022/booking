import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Booking } from 'src/booking/booking.entity';
import { RoomsService } from './room.service';
@Controller('rooms')
@UseGuards(JwtAuthGuard)
export class RoomController {
  constructor(private roomService: RoomsService) {}
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
      },
    },
  })
  @ApiBearerAuth('defaultBearerAuth')
  @Post('list')
  list(@Body() params: Partial<Booking>) {
    return this.roomService.list(params.from, params.to);
  }
}

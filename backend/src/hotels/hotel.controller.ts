import { Controller, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HotelService } from './hotel.service';
@Controller('hotels')
@UseGuards(JwtAuthGuard)
export class HotelController {
  constructor(private hotelsService: HotelService) {}
}

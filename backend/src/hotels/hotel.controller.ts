import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HotelService } from './hotel.service';
@Controller('hotels')
@UseGuards(JwtAuthGuard)
export class HotelController {
  constructor(private hotelsService: HotelService) {}

  @Get()
  list() {
    return this.hotelsService.list();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.hotelsService.findOne(id);
  }
}

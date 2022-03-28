import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { RoomsService } from './room.service';

@Controller('rooms')
export class RoomController {
  constructor(private roomService: RoomsService) {}

  @Get()
  list() {
    return this.roomService.list();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.roomService.findOne(id);
  }
}

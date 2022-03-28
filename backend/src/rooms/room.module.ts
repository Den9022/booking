import { Module } from '@nestjs/common';
import { RoomsService } from './room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './room.entity';
import { RoomController } from './room.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  providers: [RoomsService],
  controllers: [RoomController],
  exports: [RoomsService],
})
export class RoomsModule {}

import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
import { HotelController } from './hotel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  providers: [HotelService],
  controllers: [HotelController],
  exports: [HotelService],
})
export class HotelssModule {}

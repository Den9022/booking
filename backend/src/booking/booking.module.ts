import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/user.service';
import { Room } from 'src/rooms/room.entity';
import { User } from 'src/users/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { RoomsModule } from 'src/rooms/room.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Room, User]),
    AuthModule,
    RoomsModule,
  ],
  controllers: [BookingController],
  providers: [BookingService, UsersService],
  exports: [BookingService],
})
export class BookingModule {}

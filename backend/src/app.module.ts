import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './rooms/room.module';
import { UsersModule } from './users/user.module';
import { HotelssModule } from './hotels/hotel.module';
import { HotelController } from './hotels/hotel.controller';
import { RoomController } from './rooms/room.controller';
import { UserController } from './users/user.controller';
import { AuthModule } from './auth/auth.module';
import { BookingModule } from './booking/booking.module';
import { BookingController } from './booking/booking.controller';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    RoomsModule,
    HotelssModule,
    AuthModule,
    BookingModule,
  ],
  controllers: [
    AppController,
    HotelController,
    RoomController,
    UserController,
    BookingController,
  ],
  providers: [AppService],
})
export class AppModule {}

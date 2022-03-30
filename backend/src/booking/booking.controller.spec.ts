import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

describe('BookingController', () => {
  let bookingController: BookingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [BookingService],
    }).compile();

    bookingController = app.get<BookingController>(BookingController);
  });

  describe('findAll', () => {
    it('should return an array of bookings', async () => {
      const result = [];

      expect(await bookingController.findAll()).toBe(result);
    });
  });
});

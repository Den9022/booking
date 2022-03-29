import { Hotel } from 'src/hotels/hotel.entity';
import { Room } from 'src/rooms/room.entity';

export class Example {
  public hotel1 = new Hotel();
  public hotel2 = new Hotel();

  public room1 = new Room();
  public room2 = new Room();
  public room3 = new Room();
  public room4 = new Room();

  constructor() {
    this.hotel1.id = 1;
    this.hotel1.title = 'Hotel-1';
    this.hotel1.description = 'elso szamu hotel';

    this.hotel2.id = 2;
    this.hotel2.title = 'Hotel-2';
    this.hotel2.description = 'masodik szamu hotel';

    this.room1.price = 300;
    this.room1.hotel = this.hotel1.id;

    this.room2.price = 400;
    this.room2.hotel = this.hotel1.id;

    this.room3.price = 500;
    this.room3.hotel = this.hotel2.id;

    this.room4.price = 600;
    this.room4.hotel = this.hotel2.id;
  }
}

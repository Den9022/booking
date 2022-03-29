import { Room } from '../rooms/room.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RoomTable1648485099298 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'room',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'price',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'hotelId',
            type: 'int4',
          },
        ],
      }),
      true,
    );
    await queryRunner.manager.save(
      queryRunner.manager.create<Room>(Room, {
        price: 200,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}

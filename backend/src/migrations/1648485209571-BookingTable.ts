import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class BookingTable1648485209571 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'booking',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'booking_price',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'from',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'to',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'roomId',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'userId',
            type: 'int4',
            isNullable: false,
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}

import { Hotel } from '../hotels/hotel.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class HotelTable1648485177368 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'hotel',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.manager.save(
      queryRunner.manager.create<Hotel>(Hotel, {
        title: 'Hotel1',
        description: 'ez egy hotel',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}

import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Example } from '../constants/example-db-data';

export class HotelTable1648485177368 implements MigrationInterface {
  constructor(private example: Example) {
    this.example = new Example();
  }
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
    await queryRunner.manager.save(this.example.hotel1);
    await queryRunner.manager.save(this.example.hotel2);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "hotel"`);
    return;
  }
}

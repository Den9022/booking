import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { Example } from '../constants/example-db-data';

export class RoomTable1648485099298 implements MigrationInterface {
  constructor(private example: Example) {
    this.example = new Example();
  }
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
            name: 'available',
            type: 'bool',
            default: true,
          },
          {
            name: 'hotel',
            type: 'int4',
          },
        ],
      }),
      true,
    );
    await queryRunner.manager.save(this.example.room1);
    await queryRunner.manager.save(this.example.room2);
    await queryRunner.manager.save(this.example.room3);
    await queryRunner.manager.save(this.example.room4);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "room"`);
  }
}

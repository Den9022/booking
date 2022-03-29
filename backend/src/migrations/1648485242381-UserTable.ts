import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { User } from '../users/user.entity';

export class UserTable1648485242381 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: false,
          },
        ],
      }),
      true,
    );
    await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, {
        email: 'admin@admin.com',
        password: 'pass123',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return;
  }
}

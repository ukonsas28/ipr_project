import {MigrationInterface, QueryRunner} from "typeorm";

export class test11614350500092 implements MigrationInterface {
    name = 'test11614350500092'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" ADD "test3" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "test3"`);
    }

}

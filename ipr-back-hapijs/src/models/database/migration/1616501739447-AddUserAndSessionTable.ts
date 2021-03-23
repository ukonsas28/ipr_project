import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserAndSessionTable1616501739447 implements MigrationInterface {
    name = 'AddUserAndSessionTable1616501739447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" ADD "token" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "UQ_e9f62f5dcb8a54b84234c9e7a06" UNIQUE ("token")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "UQ_e9f62f5dcb8a54b84234c9e7a06"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP COLUMN "token"`);
    }

}

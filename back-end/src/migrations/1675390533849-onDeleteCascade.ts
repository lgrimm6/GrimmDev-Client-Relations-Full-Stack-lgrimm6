import { MigrationInterface, QueryRunner } from "typeorm";

export class onDeleteCascade1675390533849 implements MigrationInterface {
  name = "onDeleteCascade1675390533849";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contact" DROP CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb"`
    );
    await queryRunner.query(
      `ALTER TABLE "contact" RENAME COLUMN "clientId" TO "clientId"`
    );
    await queryRunner.query(
      `CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "phone" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_19385ccaeac3753e24d2eed6a4d" UNIQUE ("username"), CONSTRAINT "UQ_368ca99acdbd5502fc08b3f7796" UNIQUE ("phone"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`
    );
    await queryRunner.query(`DROP TABLE "client"`);
    await queryRunner.query(
      `ALTER TABLE "contact" RENAME COLUMN "clientId" TO "clientId"`
    );
    await queryRunner.query(
      `ALTER TABLE "contact" ADD CONSTRAINT "FK_e7e34fa8e409e9146f4729fd0cb" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}

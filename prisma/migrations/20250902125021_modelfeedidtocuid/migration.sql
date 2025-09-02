/*
  Warnings:

  - The primary key for the `Feed` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."Feed" DROP CONSTRAINT "Feed_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Feed_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Feed_id_seq";

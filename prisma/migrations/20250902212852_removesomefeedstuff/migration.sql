/*
  Warnings:

  - You are about to drop the column `createdById` on the `Feed` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Feed" DROP CONSTRAINT "Feed_createdById_fkey";

-- AlterTable
ALTER TABLE "public"."Feed" DROP COLUMN "createdById";

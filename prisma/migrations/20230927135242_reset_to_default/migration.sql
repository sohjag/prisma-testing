/*
  Warnings:

  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lastName",
DROP COLUMN "userName",
ADD COLUMN     "name" TEXT;

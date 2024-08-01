/*
  Warnings:

  - You are about to drop the column `author` on the `test_user` table. All the data in the column will be lost.
  - Added the required column `email` to the `test_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `test_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test_user" DROP COLUMN "author",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

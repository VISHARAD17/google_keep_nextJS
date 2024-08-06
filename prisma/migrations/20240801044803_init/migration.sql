/*
  Warnings:

  - You are about to drop the column `userId` on the `demo_posts` table. All the data in the column will be lost.
  - Added the required column `authorId` to the `demo_posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "demo_posts" DROP CONSTRAINT "demo_posts_userId_fkey";

-- AlterTable
ALTER TABLE "demo_posts" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "demo_posts" ADD CONSTRAINT "demo_posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "demo_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

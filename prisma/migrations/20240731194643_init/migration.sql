/*
  Warnings:

  - You are about to drop the `test_tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "test_tag" DROP CONSTRAINT "test_tag_userId_fkey";

-- DropTable
DROP TABLE "test_tag";

-- CreateTable
CREATE TABLE "demo_posts" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "demo_posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "demo_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "demo_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "demo_user_email_key" ON "demo_user"("email");

-- AddForeignKey
ALTER TABLE "demo_posts" ADD CONSTRAINT "demo_posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "demo_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

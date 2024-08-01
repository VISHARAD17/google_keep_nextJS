/*
  Warnings:

  - You are about to drop the `_NoteToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `t_notes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `t_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `t_users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NoteToTag" DROP CONSTRAINT "_NoteToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_NoteToTag" DROP CONSTRAINT "_NoteToTag_B_fkey";

-- DropForeignKey
ALTER TABLE "t_notes" DROP CONSTRAINT "t_notes_userId_fkey";

-- DropForeignKey
ALTER TABLE "t_tags" DROP CONSTRAINT "t_tags_userId_fkey";

-- DropTable
DROP TABLE "_NoteToTag";

-- DropTable
DROP TABLE "t_notes";

-- DropTable
DROP TABLE "t_tags";

-- DropTable
DROP TABLE "t_users";

-- CreateTable
CREATE TABLE "test_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "test_user_pkey" PRIMARY KEY ("id")
);

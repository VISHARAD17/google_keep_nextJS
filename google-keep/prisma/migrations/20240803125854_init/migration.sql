/*
  Warnings:

  - You are about to drop the `books` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `demo_posts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `demo_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "demo_posts" DROP CONSTRAINT "demo_posts_authorId_fkey";

-- DropIndex
DROP INDEX "t_user_email_key";

-- DropTable
DROP TABLE "books";

-- DropTable
DROP TABLE "demo_posts";

-- DropTable
DROP TABLE "demo_user";

-- CreateTable
CREATE TABLE "t_note" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "t_note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "t_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "t_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_NoteToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_NoteToTag_AB_unique" ON "_NoteToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_NoteToTag_B_index" ON "_NoteToTag"("B");

-- AddForeignKey
ALTER TABLE "t_note" ADD CONSTRAINT "t_note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "t_tag" ADD CONSTRAINT "t_tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "t_note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "t_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `_NoteTags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_NoteTags" DROP CONSTRAINT "_NoteTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_NoteTags" DROP CONSTRAINT "_NoteTags_B_fkey";

-- DropTable
DROP TABLE "_NoteTags";

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
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "t_note"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NoteToTag" ADD CONSTRAINT "_NoteToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "t_tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

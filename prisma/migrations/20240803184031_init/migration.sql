/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `t_tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "t_tag_userId_name_key" ON "t_tag"("userId", "name");

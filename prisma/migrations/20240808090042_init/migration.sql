/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `t_tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "t_tag_name_key" ON "t_tag"("name");

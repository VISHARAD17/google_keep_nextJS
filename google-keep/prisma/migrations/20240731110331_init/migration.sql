-- CreateTable
CREATE TABLE "test_tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "test_tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "test_tag_name_userId_key" ON "test_tag"("name", "userId");

-- AddForeignKey
ALTER TABLE "test_tag" ADD CONSTRAINT "test_tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "t_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

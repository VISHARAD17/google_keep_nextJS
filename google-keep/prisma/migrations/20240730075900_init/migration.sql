-- CreateTable
CREATE TABLE "t_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "t_user_pkey" PRIMARY KEY ("id")
);

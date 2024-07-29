import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    hello: () => 'world',
    getAllBooks: () => prisma.book.findMany(),
  },
};

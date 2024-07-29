import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient;
export const queries = {
   Query: {
        getAllBooks: () => prisma.book.findMany(),
        hello: () => 'Hello world',
    }
}

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient;
export const queries = {
   Query: {
        getAllBooks: () => prisma.book.findMany(),
        getAllUsers: () => prisma.user.findMany()
    }
}


import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient;
export const queries = {
   Query: {
        getAllBooks: () => prisma.book.findMany(),
        getAllNotes: () => prisma.note.findMany(),
        getAllTags: () => prisma.tag.findMany(),
        getAllUsers: () => prisma.user.findMany()
    },
}


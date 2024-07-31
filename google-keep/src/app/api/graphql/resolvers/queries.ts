import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const queries = {
    Query: {
        getAllBooks: () => prisma.book.findMany(),
        getOneBook: async (id:number) => {
            const book = await prisma.book.findMany({
                where:{
                    id: id
                }
            })
            return book[0]
        },
        getOneUser: async (email:string) => {
            const user = await prisma.user.findMany({
                where:{
                    email:email
                }
            })
            return user[0];
        }
    },

}

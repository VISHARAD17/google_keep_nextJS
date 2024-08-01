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
        getOneUser: async (_:any, args:{email:string}) => {
            const {email} = args;
            const user = await prisma.user.findUnique({
                where:{
                    email:email
                }
            })
            return user;
        }
    },

}

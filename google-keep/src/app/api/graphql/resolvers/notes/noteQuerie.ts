import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const noteQueries = {
    getAllNoteForUser: async(_:unknown, args:{userId:number}) => {
        const {userId} = args;
        const allNote = await prisma.note.findMany({
            where:{
                userId:userId
            }
        })
    }
}
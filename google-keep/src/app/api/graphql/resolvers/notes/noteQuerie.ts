import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const noteQueries = {
    getAllNoteForUser: async(_:unknown, args:{userId:number}) => {
        const {userId} = args;
        const allNotes = await prisma.note.findMany({
            where:{
                userId:userId
            }
        })
        return allNotes;
    },

    getAllNotesByEmail: async(_:unknown, args:{email: string}) => {
        const {email} = args;
        const user = await prisma.user.findUnique({
            where: {
                email:email
            }
        });
        const id = user.id;
        const AllNotes = await prisma.note.findMany({
            where:{
                userId: id
            }
        })
        return AllNotes;
    },

    getAllTagsForNote: async(_:unknown, args:{noteId: number}) => {
        const {noteId} = args;
        const allTags = await prisma.note.findUnique({
            where:{
                id:noteId
            },
            include:{
                tags:true
            }
        })
        console.log(allTags.tags)
        return allTags;
    },
}
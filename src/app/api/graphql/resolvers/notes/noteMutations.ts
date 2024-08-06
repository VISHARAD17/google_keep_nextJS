import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export const noteMutations = {
    
    addNote: async(_:unknown, args:{title:string, content:string, userId:number}) => {
        const {title, userId, content} = args;

        const newNote = await prisma.note.create({
            data:{
                title:title,
                content:content,
                user:{connect:{id:userId}} // connect with user
            }
        })
        console.log(`new note added with id ${newNote.id} for userId ${userId}`);
        return newNote;
    },

    deleteNote: async(_:unknown, args:{noteId:number}) => {
        const {noteId} = args;

        await prisma.note.delete({
            where:{
                id:noteId
            },
        })
        return {msg: `deleted note with noteId ${noteId}`};
    },

    updateNote: async(_:unknown, args:{noteId:number, title:string, content:string}) => {
        const {noteId, title, content} = args;

        const updatedNote = await prisma.note.update({
            where:{
                id:noteId
            },
            data:{
                title:title,
                content:content
            }
        })
        console.log(`note updated for id ${noteId}`);
        return updatedNote;
    }
}

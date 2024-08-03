import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export const tagMutaions = {
    
    createTag: async(_:unknown, args:{name:string, userId:number, noteId:number}) => {
        const {name, userId, noteId} = args;
        const tag = await prisma.tag.create({
            data:{
                name:name,
                user:{
                    connect:{
                        id:userId
                    }
                },
                notes:{
                    connect:[
                        {id:noteId}
                    ]
                }
            }
        })
        console.log("tag added");
        return {msg:`tag added with tagId ${tag.id} for user ${userId} and note ${noteId}`}
    },

    deleteTag: async(_:unknown, args:{tagId:number}) => {
        const {tagId} = args;
        const tag = await prisma.tag.delete({
            where:{
                id:tagId
            }
        })
        console.log('tag deleted');
        return {msg: `tag deleted with tagId ${tagId}`};
    }
    
}


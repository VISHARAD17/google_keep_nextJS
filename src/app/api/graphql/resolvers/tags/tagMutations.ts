import { dialogContentClasses } from "@mui/material";
import { PrismaClient } from "@prisma/client"
import { on } from "events";
import { disconnect } from "process";
const prisma = new PrismaClient();

export const tagMutaions = {
    
    createTag: async(_:unknown, args:{name:string, userId:number, noteId:number}) => {
        const {name, userId, noteId} = args;
        // if does not exists then create 
        const tagOld = await prisma.tag.findUnique({
            where:{
                name:name,
                userId:userId
            }
        })
        if(tagOld) {
            // attched to the note 
            const res = prisma.tag.update({
                where:{
                    name:name,
                    userId:userId
                },
                data:{
                    notes:{
                        connect:[
                            {id: noteId}
                        ]
                    }
                }
            })
            return res;
        }
        // else create one
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
        return tag;
    },

    deleteTag: async(_:unknown, args:{tagId:number, noteId: number}) => {
        const {tagId, noteId} = args;
        // const tag = await prisma.tag.delete({
        //     where:{
        //         id:tagId
        //     }
        // })

        // disconnect instead of delete
        const notes = await prisma.note.update({
            where:{
                id:noteId
            },
            data:{
                tags:{
                    disconnect:[
                        {id:tagId}
                    ]                }
            }
        })

        const notesWithTag = await prisma.note.count({
            where: {
                tags: {
                    some: {
                        id: tagId
                    }
                }
            }
        });

        // check if tag does not have any books then permanantely delete
        if(notesWithTag === 0){
            // deleteNote
            const tag = await prisma.tag.delete({
                where:{
                    id:tagId
                }
            })
            console.log(`permanantely deleted tag with id ${tag.id}`)
        }
              
        console.log('tag deleted');
        return {msg: `tag deleted with tagId ${tagId}`};
    },
    
}


import { PrismaClient } from "@prisma/client"
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


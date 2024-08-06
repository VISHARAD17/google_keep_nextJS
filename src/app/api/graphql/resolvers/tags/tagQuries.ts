import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const tagQueries = {

    getAllTagsForUser : async(_:unknown, args:{userId:number}) => {
        const {userId} = args;
        const allTags = await prisma.tag.findMany({
            where:{
                userId:userId
            }
        })
        console.log(`All tags fetched for userId ${userId}`);
        return allTags;
    },
} 
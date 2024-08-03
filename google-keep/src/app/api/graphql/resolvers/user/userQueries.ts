import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userQueries = {

    getAllUsers: async() => {
        const allUsers = await prisma.user.findMany();
    },
    
    getOneUserById: async(_:unknown, args:{userId:number}) => {
        const {userId} = args;

        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })

        if(!user){
            throw new Error(`user for found for id ${userId}`)
        }
        return user;
    },

    getOneUserByEmail: async(_:unknown, args:{userEmail:string}) => {
        const {userEmail} = args;
        const user = await prisma.user.findUnique({
            where:{
                email:userEmail
            }
        })
        return user;
    }
}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userMutations = {

    createUser: async (_: unknown, args: { name: string, email: string, password: string }) => {
        // TODO: hash password
        const { name, email, password } = args;
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
    },

    

    deleteUserAndItsData: async(_:unknown, args:{userId:number}) => {
        const {userId} = args;
        const user =  prisma.user.delete({
            where:{
                id:userId
            }
        })

        const notes =  prisma.note.deleteMany({
            where:{
                userId:userId
            }
        })

        const tags =  prisma.tag.deleteMany({
            where:{
                userId:userId
            }
        })
        
        try{
            const transaction = await prisma.$transaction([user, notes, tags]);
            console.log(`all data deleted for user ${userId}`);
        }catch(error){
            console.log(`error occured while deleting with details : ${error}`)
        }
    }

}
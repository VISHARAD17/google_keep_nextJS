import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userMutations = {

    createUser: async (_: unknown, args: { name: string, email: string, password: string }) => {
        const { name, email, password } = args;
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
            }
        })
        return newUser;
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
            return{Msg:`all data deleted for user ${userId} and trascation id ${transaction}`};
        }catch(error){
            console.log(`error occured while deleting with details : ${error}`)
        }
    },

    updateUser: async(_:unknown, args:{name:string, email:string, userId:number}) => {
        const {email, name, userId} = args;
        const updatedUser = await prisma.user.update({
            where:{
                id: userId
            },
            data:{
                name:name,
                email:email
            }
        })
        console.log(`user updated with id ${userId}`)
        return updatedUser;
    }

}
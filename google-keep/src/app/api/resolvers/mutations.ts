import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export const mutations = {
        Mutation: {
        // insert one data - Book
        insertBook:async (_:unknown,args:{name:string, author:string}) => {
            const {name, author} = args;
            const newBook = await prisma.book.create({
                data:{
                    name, 
                    author
                }
            });

            console.log(`data inserted is name ${name} and author ${author}`);
            return newBook;
        },

        insertDummyData: async () => {
             await prisma.book.createMany({
                data: [
                    { name: "dummyName1", author:"dummyAuthor1"},
                    { name: "dummyName2", author:"dummyAuthor2"},
                    { name: "dummyName3", author:"dummyAuthor3"}
                ]
            })
            return {msg:"data inserted Successfully"};
        },

        deleteAllData:async () => {
            await prisma.book.deleteMany();
            return {msg:"deleted Successfully"};
        },

        deleteOneById: async (_:unknown, args:{id:number}) => {
            const {id} = args;
            await prisma.book.delete({
                where:{
                    id: id
                }
            })
            return {msg:`deleted data with id ${id}`};
        },

        updateOneByid:async (_:unknown, args:{id:number, updatedName:string, updatedAuthor:string}) => {
            const {id, updatedName, updatedAuthor} = args;
            await prisma.book.update({
                where:{
                    id:id
                },
                data:{
                    name:updatedName,
                    author:updatedAuthor
                }
            })

            return {msg:`updated name and author for id ${id}`}
        },
    }

}

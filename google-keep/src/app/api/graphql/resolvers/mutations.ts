import { PrismaClient } from "@prisma/client";
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

    registerUser:async(_:unknown, args:{name:string, email:string, password: string}) => {
            const {name, email, password} = args;
            const user = await prisma.user.create({
                data:{
                    name,
                    email,
                    password
                }
            })
            console.log(`user register with ${user.id}`)
            return user;
    },

    registerAuthor: async(_:unknown, args:{name:string, email:string, password:string}) => {
        const {name, email, password} = args;
        const author = await prisma.author.create({
            data:{
                name, 
                email,
                password
            }
        });
        console.log(`author added with id ${author.id}`)
        return author;
    },

    // figure out how to return post with their respective authors
    addPostForAuthor: async(_:unknown, args:{name:string, authorId:number}) => {
        const {name, authorId} = args;
        const post = await prisma.post.create({
            data:{
                name,
                author:{connect:{id: authorId}}
            }
        })
        console.log("post", post);
        return post;
    }
}
}

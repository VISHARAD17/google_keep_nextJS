import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const myTypeDef = `
type Book {
    id: Int
    name:String
    author:String
}

type Msg{
    msg: String
}

# get all books
type Query {
    getAllBooks: [Book]
}

type Mutation {
    insertBook(name: String, author: String): Book
    insertDummyData: Msg
    deleteAllData: Msg
    deleteOneById(id:Int): Msg
    updateOneByid(id:Int, updatedName:String, updatedAuthor:String): Msg
}

`;
const myResolver = {
    Query: {
        getAllBooks: () => prisma.book.findMany()
    },
    Mutation: {
        insertBook: async (_, args) => {
            const { name, author } = args;
            const newBook = await prisma.book.create({
                data: {
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
                    { name: "dummyName1", author: "dummyAuthor1" },
                    { name: "dummyName2", author: "dummyAuthor2" },
                    { name: "dummyName3", author: "dummyAuthor3" }
                ]
            });
            return { msg: "data inserted Successfully" };
        },
        deleteAllData: async () => {
            await prisma.book.deleteMany();
            return { msg: "deleted Successfully" };
        },
        deleteOneById: async (_, args) => {
            const { id } = args;
            await prisma.book.delete({
                where: {
                    id: id
                }
            });
            return { msg: `deleted data with id ${id}` };
        },
        updateOneByid: async (_, args) => {
            const { id, updatedName, updatedAuthor } = args;
            await prisma.book.update({
                where: {
                    id: id
                },
                data: {
                    name: updatedName,
                    author: updatedAuthor
                }
            });
            return { msg: `updated name and author for id ${id}` };
        }
    }
};
const server = new ApolloServer({
    typeDefs: myTypeDef,
    resolvers: myResolver,
});
const { url } = await startStandaloneServer(server, { listen: { port: 400 } });
console.log(`server is ready at ${url}`);

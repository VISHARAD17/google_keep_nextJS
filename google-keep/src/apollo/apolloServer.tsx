// this is resolvers folder


import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = `
type DemoObj {
id:Int 
name:String
last_name:String
}

type Query {
    getAllObjs: [DemoObj]
}

# creating new object
type Mutation {
    createObj(name:String!, last_name:String!): Note
}
`;


const resolvers = {
    Query:{
        getAllObjs: async () => await prisma.demoObj.findMany(),
    },
    Mutation: {
        createObj: async (_: unknown, {name, last_name} : {name:string, last_name:string}) => {
            return await prisma.demoObj.create({
                data:{ name, last_name }
            })
        }
    }
} 

const server = new ApolloServer({ typeDefs, resolvers});

export default server;




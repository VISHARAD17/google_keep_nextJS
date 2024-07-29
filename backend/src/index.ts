import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import myResolver from './apis/resolvers/';
import myTypeDefs from './apis/typeDefs/';
import { Context, createContext } from './lib/types';

const server = new ApolloServer({ typeDefs:myTypeDefs, resolvers:myResolver });

const PORT = Number(process.env.PORT) || 400;


const runServer = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
        // context: createContext
    });
    console.log(`App is running on ${url}`);
};

runServer();

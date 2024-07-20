import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import myResolver from './apis/resolvers';
import myTypeDef from './apis/typedefs';
import * as dotenv from 'dotenv'

const server = new ApolloServer({
  typeDefs:myTypeDef,
  resolvers:myResolver,
});

const runServer = async () => {
    dotenv.config();
    const PORT = process.env.PORT ? Number(process.env.PORT) : 400;
    await startStandaloneServer(server, { listen: {port:PORT } })
    console.log("server running on 400");
}

runServer();

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import myTypeDef from './apis/typedefs';
import myResolver from './apis/resolvers/';

const server = new ApolloServer({
  typeDefs:myTypeDef,
  resolvers:myResolver,
});

const runServer = async () => {
    const PORT = Number(process.env.PORT);
    await startStandaloneServer(server, { listen: {port:PORT} })
    console.log("server running on 400");
}

runServer();

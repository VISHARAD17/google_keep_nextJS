import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import myResolver from './apis/resolvers/';
import myTypeDefs from './apis/typeDefs/';

const server = new ApolloServer({
  typeDefs:myTypeDefs,
  resolvers:myResolver,
});

const PORT = Number(process.env.PORT);


const runServer = async () => {
    const {url} = await startStandaloneServer(server, { listen: {port:PORT} })
    console.log(`app is running on ${url}`);
}

runServer();

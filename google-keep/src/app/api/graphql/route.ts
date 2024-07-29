import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';

import { typeDefs } from '../typeDef';
import { resolvers } from '../resolver';

// const resolvers = {
//   Query: {
//     hello: () => 'world',
//   },
// };
//
// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

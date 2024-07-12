
import { NextApiRequest, NextApiResponse } from 'next';
import server from '../apollo/apolloServer';
import { ApolloServer } from '@apollo/server';

const startServer = server.start();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startServer;
  await server.createHandler({ path: '/api/graphql' })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

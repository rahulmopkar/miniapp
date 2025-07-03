import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use(
  '/graphql',
  cors(),
  bodyParser.json(),
  expressMiddleware(server)
);

app.listen({ port: 4000 }, () => {
  console.log('🚀 Server ready at http://localhost:4000/graphql');
});

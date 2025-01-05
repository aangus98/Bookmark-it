import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import typeDefs from './routes/api/index'; // Use typeDefs from routes
import resolvers from './routes/api/index'; // Use resolvers from routes
import { connectDB } from './config/connection';
import authMiddleware from './services/auth';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware(req),
});

async function startServer() {
  await connectDB();
  await server.start();
  app.use('/graphql', expressMiddleware(server));
  app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
}

startServer();


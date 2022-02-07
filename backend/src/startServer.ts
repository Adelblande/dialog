import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express, {Request, Response, NextFunction} from "express";
import http from "http";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/schema.graphql";
import mongoose from "mongoose";

async function startApolloServer() {
  const app = express();

  const loggingMiddleware = (req: Request , res: Response, next: NextFunction) => {
    console.log(req.originalUrl, req.method, req.params);
    next();
  }

  app.use(loggingMiddleware)

  const httpServer = http.createServer(app);

  mongoose.connect(
    "mongodb+srv://adelblande:adel2323@cluster0.ie8ik.mongodb.net/dialog?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({
    app,
    path: "/",
  });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

export default startApolloServer;

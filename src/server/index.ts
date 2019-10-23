import express from 'express';
import graphqlHTTP from 'express-graphql';
import { Client } from 'pg';
import { root, schema } from "./schema";

const dbConfig = {
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "game"
};

const gqlConfig = {
  schema: schema,
  rootValue: root,
  graphiql: true,
}

const client = new Client(dbConfig);
const app = express();

client.connect();
app.use('/graphql', graphqlHTTP(gqlConfig));
app.listen(4000);
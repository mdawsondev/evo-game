import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { Client } from 'pg';
import { schema } from "./schema";

dotenv.config();

const {
  POSTGRESS_DB,
  POSTGRESS_HOST,
  POSTGRESS_PASS,
  POSTGRESS_PORT,
  POSTGRESS_USER
} = process.env;

const dbConfig = {
  database: POSTGRESS_DB,
  host: POSTGRESS_HOST,
  password: POSTGRESS_PASS,
  port: Number(POSTGRESS_PORT),
  user: POSTGRESS_USER
};

const gqlConfig = {
  graphiql: true,
  schema: schema
};

const app = express();
export const client = new Client(dbConfig);

client.connect();
app.use('/graphql', graphqlHTTP(gqlConfig));
app.listen(4000);
console.log("GraphQL is running at localhost:4000/graphql");

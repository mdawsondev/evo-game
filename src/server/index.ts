"use strict";
import dotenv from 'dotenv';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { Client } from 'pg';
import { schema } from "./schema";

dotenv.config();

const {
  API_ENDPOINT,
  API_PORT,
  API_URL,
  POSTGRESS_DB,
  POSTGRESS_HOST,
  POSTGRESS_PASS,
  POSTGRESS_PORT,
  POSTGRESS_USER,
} = process.env;

const dbConfig = {
  database: POSTGRESS_DB,
  host: POSTGRESS_HOST,
  password: POSTGRESS_PASS,
  port: Number(POSTGRESS_PORT),
  user: POSTGRESS_USER
};

const gqlConfig = {
  graphiql: false,
  schema: schema
};

const app = express();
export const client = new Client(dbConfig);

client.connect();
app.get(`/${API_ENDPOINT}`, graphqlHTTP(gqlConfig));
app.post(`/${API_ENDPOINT}`, graphqlHTTP(gqlConfig));
app.listen(API_PORT);
console.log(`GraphQL is running at ${API_URL}:${API_PORT}/${API_ENDPOINT}`);

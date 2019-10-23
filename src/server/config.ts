require('dotenv').config();

import { Pool } from "pg";

const isProduction = process.env.NODE_ENV === "propduction";
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE, DATABASE_URL} = process.env;
const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? DATABASE_URL : connectionString,
  ssl: isProduction
})

module.exports { pool };
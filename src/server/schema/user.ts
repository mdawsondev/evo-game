/** Note: "user" must be quoted in SQL due to the internal variable. */

import { client } from "../";
import { saltHashPassword, sha512 } from "../scripts/password";
import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { QueryResult } from "pg";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    deletedAt: { type: GraphQLString },
    salt: { type: GraphQLString }
  },
});

export const CreateUser = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString }
  },
  async resolve(parentValue: any, args: any) {
    const uniqueQuery = `SELECT id FROM "user" WHERE userName=$1`;
    const uniqueValues = [args.username];
    const user = await client.query(uniqueQuery, uniqueValues)
      .then((res: QueryResult<any>) => res.rows[0]);

    if (!!user) throw new Error("This username is taken.");

    const insertQuery = `INSERT INTO "user" (username, password, salt, email, "firstName", "lastName") VALUES ($1, $2, $3, $4, $5, $6) RETURNING "id"`;
    const hashData = saltHashPassword(args.password);
    const insertValues = [
      args.username,
      hashData.passwordHash,
      hashData.salt,
      args.email,
      args.firstName,
      args.lastName
    ];

    return await client.query(insertQuery, insertValues)
      .then((res: QueryResult<any>) => res.rows[0]);
  }
}

export const ReadUser = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  async resolve(parentValue: any, args: any) {
    const query = `SELECT * FROM "user" WHERE id=$1`;
    const values = [args.id];
    return await client.query(query, values)
      .then((res: QueryResult<any>) => res.rows[0]);
  }
}

export const ValidateUser = {
  type: UserType,
  args: { 
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parentValue: any, args: any) {
    const query = `SELECT * FROM "user" WHERE username=$1`;
    const values = [args.username];
    const result = await client.query(query, values)
      .then((res: QueryResult<any>) => res.rows[0]);

    const hashData = sha512(args.password, result.salt);
    if (result.password === hashData.passwordHash) {
      console.log("Successfully entered correct password.");
    } else {
      console.log("Incorrect password.");
    }
  }
}
import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import { client } from "../";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  }
});

export const UserField = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  async resolve(parentValue: any, args: any) {
    const query = `SELECT * FROM "user" WHERE id=$1`;
    const values = [args.id];
    const result = await client.query(query, values);
    const match = result.rows[0];

    return match;
  }
}
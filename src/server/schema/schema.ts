import { GraphQLSchema, GraphQLObjectType,  } from "graphql";
import { UserField } from "./user";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: UserField
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery
})

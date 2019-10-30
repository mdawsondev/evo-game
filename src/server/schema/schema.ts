import { GraphQLSchema, GraphQLObjectType,  } from "graphql";
import { CreateUser, ReadUser, ValidateUser } from "./user";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: ReadUser,
    login: ValidateUser
  }
});

export const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    CreateUser
  }
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

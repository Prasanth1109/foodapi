import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "../Resolvers/resolver";

const typeDefs = `

scalar Json 
scalar DateTime 

input getUserInput{
   userUniqueKey: String!
   email: String!
   password: String!
}

input userInput{
   userUniqueKey: String!
   name: String!
   email: String!
   password: String!
}

type Query{
   getUser(input:getUserInput):Json
}

type Mutation{
   createOrUpdateUser(input:userInput):Json
}
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
export default schema;
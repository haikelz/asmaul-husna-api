import { buildSchema } from "graphql";

export const schema = buildSchema(`
type Endpoints {
  all: String
  urutan: String
  latin: String
}

type AsmaulHusna {
  urutan: ID!
  latin: String
  arab: String
  arti: String
}

type Home {
  author: String!
  repository: String!
  endpoints: String!
}

type AllAsmaulHusna {
  statusCode: ID!
  total: ID!
  data: [AsmaulHusna]
}

type AsmaulHusnaByLatin {
  statusCode: ID!
  total: ID!
  data: AsmaulHusna
}

type AsmaulHusnaByUrutan {
  statusCode: ID!
  total: ID!
  data: AsmaulHusna
}

type Query {
  home: Home
  allAsmaulHusna(page: Int, limit: Int): AllAsmaulHusna
  asmaulHusnaByUrutan(urutan: Int!): AsmaulHusnaByUrutan
  asmaulHusnaByLatin(latin: String!): AsmaulHusnaByLatin
}
`);

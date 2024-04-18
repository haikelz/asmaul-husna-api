import { buildSchema } from "graphql";

export const homeSchema = buildSchema(`
type Endpoints {
  apigraphqlall: String
  apigraphqlurutan: String
  apigraphqllatinlatin: String
}

type Query {
  author: String
  repository: String
  endpoints: Endpoints
}
`);

export const allSchema = buildSchema(`
type AsmaulHusna {
  urutan: ID!
  latin: String
  arab: String
  arti: String
}

type Query {
  statusCode: ID!
  total: ID!
  data: [AsmaulHusna]
}
`);

export const latinSchema = buildSchema(`
type AsmaulHusna {
  urutan: ID!
  latin: String
  arab: String
  arti: String
}

type Query {
  statusCode: ID!
  total: ID!
  data: AsmaulHusna
}
`);

export const urutanSchema = buildSchema(`
type AsmaulHusna {
  urutan: ID!
  latin: String
  arab: String
  arti: String
}

type Query {
  statusCode: ID!
  total: ID!
  data: AsmaulHusna
}
`);

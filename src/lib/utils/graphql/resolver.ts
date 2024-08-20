import { GraphQLError } from "graphql";
import slugify from "slugify";
import { handlePagination } from "../../helpers";
import { asmaulHusna } from "../../utils/data";

const home = () => {
  return {
    author: "Haikel Ilham Hakim",
    repository: "https://github.com/haikelz/asmaul-husna-api",
    endpoints: "/api/graphql",
  };
};

const allAsmaulHusna = (args: { page: number; limit: number }) => {
  const { page, limit } = args;

  const results = handlePagination({
    data: asmaulHusna,
    page: page,
    limit: limit,
  });

  return {
    statusCode: 200,
    total: limit ? results.length : asmaulHusna.length,
    data: limit ? results : asmaulHusna,
  };
};

const asmaulHusnaByLatin = (args: { latin: string }) => {
  const { latin } = args;

  const filteredData = asmaulHusna.filter(
    (item) =>
      /**
       * - latin can be lowercase or uppercase
       * - In the end, it'll be transformed to lowercase format
       */
      slugify(item.latin, { lower: true }) === slugify(latin, { lower: true })
  )[0];

  if (!filteredData) throw new GraphQLError("Bad Request");

  return {
    statusCode: 200,
    total: 1,
    data: filteredData,
  };
};

const asmaulHusnaByUrutan = (args: { urutan: number }) => {
  const { urutan } = args;

  const filteredData = asmaulHusna.filter(
    (item) => item.urutan === Number(urutan)
  )[0];

  if (!filteredData) throw new GraphQLError("Bad Request");

  return {
    statusCode: 200,
    total: 1,
    data: filteredData,
  };
};

export const resolver = () => ({
  home,
  allAsmaulHusna,
  asmaulHusnaByLatin,
  asmaulHusnaByUrutan,
});

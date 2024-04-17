import { GraphQLError } from "graphql";
import slugify from "slugify";
import { handlePagination } from "../../helpers";
import { asmaulHusna } from "../../utils/data";

export const homeResolver = () => {
  return {
    author: () => "Haikel Ilham Hakim",
    repository: () => "https://github.com/haikelz/asmaul-husna-api",
    endpoints: () => ({
      "/api/graphql/all":
        "Get all Asma'ul Husna. Available queries: limit and page",
      "/api/graphql/:urutan": "Get spesific Asma'ul Husna based on urutan",
      "/api/graphql/latin/:latin": "Get spesific Asma'ul Husna based on latin",
    }),
  };
};

export const allResolver = (ctx: any) => {
  const { page, limit } = ctx.req.query();

  const results = handlePagination({
    data: asmaulHusna,
    page: page,
    limit: limit,
  });

  return {
    statusCode: () => 200,
    total: () => (limit ? results.length : asmaulHusna.length),
    data: () => (limit ? results : asmaulHusna),
  };
};

export const latinResolver = (ctx: any) => {
  const latin = ctx.req.param();

  const filteredData = asmaulHusna.filter(
    (item) =>
      /**
       * - latin can be lowercase or uppercase
       * - In the end, it'll be transformed to lowercase format
       */
      slugify(item.latin, { lower: true }) ===
      slugify(latin.latin, { lower: true })
  )[0];

  if (!filteredData) throw new GraphQLError("Bad Request");

  return {
    statusCode: () => 200,
    total: () => 1,
    data: () => filteredData,
  };
};

export const urutanResolver = (ctx: any) => {
  const urutan = ctx.req.param();

  const filteredData = asmaulHusna.filter(
    (item) => item.urutan === Number(urutan.urutan)
  )[0];

  if (!filteredData) throw new GraphQLError("Bad Request");

  return {
    statusCode: () => 200,
    total: () => 1,
    data: () => filteredData,
  };
};

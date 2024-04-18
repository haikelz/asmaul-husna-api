import { graphqlServer } from "@hono/graphql-server";
import { handle } from "@hono/node-server/vercel";
import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import slugify from "slugify";
import { handlePagination, setHeader } from "./lib/helpers";
import { asmaulHusna } from "./lib/utils/data";
import {
  allResolver,
  homeResolver,
  latinResolver,
  urutanResolver,
} from "./lib/utils/graphql/resolver";
import {
  allSchema,
  homeSchema,
  latinSchema,
  urutanSchema,
} from "./lib/utils/graphql/schema";

const app = new Hono();

app.use(logger());
app.use(compress());
app.use(cors());

app.use(
  "/api/graphql",
  graphqlServer({ schema: homeSchema, rootResolver: homeResolver })
);

app.use(
  "/api/graphql/all",
  graphqlServer({ schema: allSchema, rootResolver: allResolver })
);

app.use(
  "/api/graphql/latin/:latin",
  graphqlServer({ schema: latinSchema, rootResolver: latinResolver })
);

app.use(
  "/api/graphql/:urutan",
  graphqlServer({ schema: urutanSchema, rootResolver: urutanResolver })
);

app.get("/", (ctx) => {
  const results = {
    author: "Haikel Ilham Hakim",
    repository: "https://github.com/haikelz/asmaul-husna-api",
    endpoints: {
      all: "/api/all",
      urutan: "/api/:urutan",
      latin: "/api/latin/:latin",
    },
  };

  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  return ctx.json(results);
});

app.get("/api/all", (ctx) => {
  const { page, limit } = ctx.req.query();

  const results = handlePagination({
    data: asmaulHusna,
    page: page,
    limit: limit,
  });

  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  return ctx.json(
    {
      statusCode: 200,
      total: limit ? results.length : asmaulHusna.length,
      data: limit ? results : asmaulHusna,
    },
    200
  );
});

app.get("/api/latin/:latin", (ctx) => {
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

  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  if (!filteredData)
    return ctx.json(
      {
        message: "Not Found",
        statusCode: 404,
      },
      404
    );

  return ctx.json({ statusCode: 200, total: 1, data: filteredData }, 200);
});

app.get("/api/:urutan", (ctx) => {
  const urutan = ctx.req.param();

  const filteredData = asmaulHusna.filter(
    (item) => item.urutan === Number(urutan.urutan)
  )[0];

  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  if (!filteredData)
    return ctx.json(
      {
        message: "Not Found",
        statusCode: 404,
      },
      404
    );

  return ctx.json(
    {
      statusCode: 200,
      total: 1,
      data: filteredData,
    },
    200
  );
});

app.notFound((ctx) => {
  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  return ctx.json(
    {
      message: "Not Found",
      statusCode: 404,
    },
    404
  );
});

app.onError((err, ctx) => {
  setHeader(ctx, {
    contentType: "application/json",
    accept: "application/json",
  });

  return ctx.json(
    { message: `Error! ${err.message} because ${err.cause}`, statusCode: 500 },
    500
  );
});

export default handle(app);

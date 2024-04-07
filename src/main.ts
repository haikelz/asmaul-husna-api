import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import slugify from "slugify";
import { handlePagination } from "./lib/helpers";
import { asmaulHusna } from "./lib/utils/data";
import { handle } from "hono/vercel";
import { serve } from "@hono/node-server";

export const config = {
  runtime: "edge",
};

const app = new Hono();

app.use(logger());
app.use(compress());
app.use(cors());

app.get("/", (c) => {
  const results = {
    author: "Haikel Ilham Hakim",
    repository: "https://github.com/haikelz/asmaul-husna-api",
    endpoints: {
      "/api/all": "Get all Asma'ul Husna. Available queries: limit and page",
      "/api/:urutan": "Get spesific Asma'ul Husna based on urutan",
      "/api/latin/:latin": "Get spesific Asma'ul Husna based on latin",
    },
  };

  return c.json(results);
});

app.get("/api/all", (c) => {
  const { page, limit } = c.req.query();

  const results = handlePagination({
    data: asmaulHusna,
    page: page,
    limit: limit,
  });

  return c.json(
    {
      statusCode: 200,
      total: limit ? results.length : asmaulHusna.length,
      data: limit ? results : asmaulHusna,
    },
    200
  );
});

app.get("/api/latin/:latin", (c) => {
  const latin = c.req.param();

  const filteredData = asmaulHusna.filter(
    (item) =>
      /**
       * - latin can be lowercase or uppercase
       * - In the end, it'll be transformed to lowercase format
       */
      slugify(item.latin, { lower: true }) ===
      slugify(latin.latin, { lower: true })
  )[0];

  if (!filteredData)
    return c.json(
      {
        message: "Not Found",
        statusCode: 404,
      },
      404
    );

  return c.json({ statusCode: 200, total: 1, data: filteredData }, 200);
});

app.get("/api/:urutan", (c) => {
  const urutan = c.req.param();

  const filteredData = asmaulHusna.filter(
    (item) => item.urutan === Number(urutan.urutan)
  )[0];

  if (!filteredData)
    return c.json(
      {
        message: "Not Found",
        statusCode: 404,
      },
      404
    );

  return c.json(
    {
      statusCode: 200,
      total: 1,
      data: filteredData,
    },
    200
  );
});

app.notFound((c) => {
  return c.json(
    {
      message: "Not Found",
      statusCode: 404,
    },
    404
  );
});

app.onError((err, c) => {
  return c.json(
    { message: `Error! ${err.message} because ${err.cause}`, statusCode: 500 },
    500
  );
});

serve({ fetch: app.fetch, port: 5000 });

export default handle(app);

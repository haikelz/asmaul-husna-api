import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const graphqlGetLatinSchema = z.object({
  data: z.object({
    statusCode: z.number(),
    total: z.number(),
    data: z.object({
      urutan: z.number(),
      latin: z.string(),
      arab: z.string(),
      arti: z.string(),
    }),
  }),
});

export class GraphqlGetLatinDto extends createZodDto(graphqlGetLatinSchema) {}

import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const graphqlGetHomeSchema = z.object({
  author: z.string(),
  repository: z.string(),
  endpoints: z.object({
    "/api/graphql/all": z.string(),
    "/api/graphql/:urutan": z.string(),
    "/api/graphql/latin/:latin": z.string(),
  }),
});

export class GraphqlGetHomeDto extends createZodDto(graphqlGetHomeSchema) {}

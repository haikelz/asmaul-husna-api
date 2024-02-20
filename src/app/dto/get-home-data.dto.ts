import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getHomeDataSchema = z.object({
  author: z.string(),
  repository: z.string(),
  endpoints: z.object({
    "/api/all": z.string(),
    "/api/:urutan": z.string(),
    "/api/latin/:latin": z.string(),
  }),
  statusCode: z.number(),
});

export class GetHomeDataDto extends createZodDto(getHomeDataSchema) {}

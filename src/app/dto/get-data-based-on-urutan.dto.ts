import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getDataBasedOnUrutanSchema = z.object({
  statusCode: z.number(),
  total: z.number(),
  data: z.object({
    urutan: z.number(),
    latin: z.string(),
    arab: z.string(),
    arti: z.string(),
  }),
});

export class GetDataBasedOnUrutanDto extends createZodDto(
  getDataBasedOnUrutanSchema,
) {}

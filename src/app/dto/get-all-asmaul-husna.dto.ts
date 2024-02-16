import { createZodDto } from "nestjs-zod";
import { z } from "zod";

const getAllAsmaulHusnaSchema = z.object({
  statusCode: z.number(),
  total: z.number(),
  data: z.array(
    z.object({
      urutan: z.number(),
      latin: z.string(),
      arab: z.string(),
      arti: z.string(),
    }),
  ),
});

export class GetAllAsmaulHusnaDto extends createZodDto(
  getAllAsmaulHusnaSchema,
) {}

import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";

import { AllService } from "../../domain/services/all.service";
import { GetAllAsmaulHusnaDto } from "../dto/get-all-asmaul-husna.dto";

@ApiTags("api")
@ApiQuery({
  name: "limit",
  description: "Limit data that want to showed",
  type: "string",
  required: false,
})
@Controller("/api/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @TypedRoute.Get()
  getAllAsmaulHusna(
    @TypedQuery() query: { limit?: string },
  ): GetAllAsmaulHusnaDto {
    return this.allService.getAllAsmaulHusna(query.limit);
  }
}

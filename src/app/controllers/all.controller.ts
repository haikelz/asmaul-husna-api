import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AllService } from "../../domain/services/all.service";
import { GetAllAsmaulHusnaDto } from "../dto/get-all-asmaul-husna.dto";

@ApiTags("api")
@Controller("/api/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @TypedRoute.Get()
  public getAllAsmaulHusna(
    // limit and page is optional
    @TypedQuery() query: { limit?: string; page?: string },
  ): GetAllAsmaulHusnaDto {
    const { limit, page } = query;
    return this.allService.getAllAsmaulHusna(limit, page);
  }
}

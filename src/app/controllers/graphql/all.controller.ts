import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AllService } from "../../../domain/services/graphql/all.service";
import { GraphqlGetAllDto } from "../../dto/graphql/graphql-get-all.dto";

@ApiTags("api")
@Controller("/api/graphql/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @TypedRoute.Post()
  public getAllAsmaulHusna(
    @TypedQuery() query: { limit?: string; page?: string },
  ): GraphqlGetAllDto {
    const { limit, page } = query;
    return this.allService.getAllAsmaulHusna(limit, page);
  }
}

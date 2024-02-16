import { TypedQuery, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiQuery, ApiTags } from "@nestjs/swagger";

import { AllService } from "../../../domain/services/graphql/all.service";
import { GraphqlGetAllDto } from "../../dto/graphql/graphql-get-all.dto";

@ApiTags("api")
@ApiQuery({
  name: "limit",
  description: "Limit data that want to showed",
  type: "string",
  required: false,
})
@Controller("/api/graphql/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @TypedRoute.Post()
  getAllAsmaulHusna(@TypedQuery() query: { limit?: string }): GraphqlGetAllDto {
    return this.allService.getAllAsmaulHusna(query.limit);
  }
}

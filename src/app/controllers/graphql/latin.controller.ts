import { TypedRoute } from "@nestia/core";
import { Controller, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";

import { LatinService } from "../../../domain/services/graphql/latin.service";
import { GraphqlGetLatinDto } from "../../dto/graphql/graphql-get-latin.dto";

@ApiTags("api")
@ApiParam({
  name: "latin",
  description: "POST data based on latin",
  type: "string",
  required: true,
})
@Controller("/api/graphql/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @TypedRoute.Post()
  getDataBasedOnLatin(
    @Param("latin") latin: string, // latin must be string
  ): GraphqlGetLatinDto {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

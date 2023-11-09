import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { LatinService } from "../../../domain/services/graphql/latin.service";
import { GraphqlGetLatinDto } from "../../dto/graphql/graphql-get-latin.dto";

@ApiTags("api")
@Controller("/api/graphql/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @Post()
  getDataBasedOnLatin(
    @Param("latin") latin: string, // latin must be string
  ): GraphqlGetLatinDto {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

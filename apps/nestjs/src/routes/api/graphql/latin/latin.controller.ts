import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GraphqlGetLatinProps } from "../../../../interfaces";
import { LatinService } from "./latin.service";

@ApiTags("api")
@Controller("/api/graphql/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @Post()
  getDataBasedOnLatin(
    @Param("latin") latin: string, // latin must be string
  ): GraphqlGetLatinProps {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

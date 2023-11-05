import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GetDataBasedOnLatinProps } from "../../../interfaces";
import { LatinService } from "./latin.service";

@ApiTags("api")
@Controller("/api/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @Get()
  getDataBasedOnLatin(
    // latin must be string
    @Param("latin") latin: string,
  ): GetDataBasedOnLatinProps {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

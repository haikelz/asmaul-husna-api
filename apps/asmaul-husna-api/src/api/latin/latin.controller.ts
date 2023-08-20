import { TypedParam } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

import { LatinService } from "./latin.service";

@Controller("/api/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @Get()
  getDataBasedOnLatin(
    // latin must be string
    @TypedParam("latin") latin: string,
  ) {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

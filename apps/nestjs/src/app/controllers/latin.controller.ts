import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { LatinService } from "../../domain/services/latin.service";
import { GetDataBasedOnLatinDto } from "../dto/get-data-based-on-latin.dto";

@ApiTags("api")
@Controller("/api/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @Get()
  getDataBasedOnLatin(
    // latin must be string
    @Param("latin") latin: string,
  ): GetDataBasedOnLatinDto {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

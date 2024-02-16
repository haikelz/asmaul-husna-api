import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { LatinService } from "../../domain/services/latin.service";
import { GetDataBasedOnLatinDto } from "../dto/get-data-based-on-latin.dto";

@ApiTags("api")
@Controller("/api/latin/:latin")
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @TypedRoute.Get()
  getDataBasedOnLatin(
    // latin must be string
    @TypedParam("latin") latin: string,
  ): GetDataBasedOnLatinDto {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

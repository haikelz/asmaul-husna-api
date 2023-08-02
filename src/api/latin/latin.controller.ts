import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { GetDataBasedOnLatinProps } from "../../interfaces";
import { LatinService } from "./latin.service";

@Controller()
export class LatinController {
  constructor(private readonly latinService: LatinService) {}

  // get data based on latin
  @TypedRoute.Get("/api/latin/:latin")
  getDataBasedOnLatin(
    // latin must be string
    @TypedParam("latin") latin: string,
  ): GetDataBasedOnLatinProps {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller, NotFoundException } from "@nestjs/common";
import slugify from "slugify";

import { GetDataBasedOnLatinProps } from "../../interfaces";
import { ApiService } from "../api.service";

@Controller()
export class LatinController {
  constructor(private readonly apiService: ApiService) {}

  // get data based on latin
  @TypedRoute.Get("/api/latin/:latin")
  getDataBasedOnLatin(
    // latin must be string
    @TypedParam("latin") latin: string,
  ): GetDataBasedOnLatinProps {
    const filteredData = this.apiService.getAllAsmaulHusna().filter(
      (item) =>
        /**
         * - latin can be lowercase or uppercase
         * - In the end, it'll be transformed to lowercase format
         */
        slugify(item.latin, { lower: true }) ===
        slugify(latin, { lower: true }),
    )[0];

    if (!filteredData) throw new NotFoundException();
    return {
      statusCode: 200,
      total: 1,
      data: filteredData,
    };
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";
import { GetDataBasedOnLatinProps } from "interfaces";
import slugify from "slugify";

import { ApiService } from "../api.service";

@Injectable()
export class LatinService {
  constructor(private readonly apiService: ApiService) {}

  getDataBasedOnLatin(
    // latin must be string
    latin: string,
  ): GetDataBasedOnLatinProps {
    const filteredData = this.apiService.getAllAsmaulHusna().data.filter(
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

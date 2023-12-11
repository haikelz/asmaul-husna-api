import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import slugify from "slugify";

import { GraphqlGetLatinDto } from "../../../app/dto/graphql/graphql-get-latin.dto";
import { asmaulHusna } from "../../../lib/data";

@Injectable()
export class LatinService {
  getDataBasedOnLatin(
    // latin must be string
    latin: string,
  ): GraphqlGetLatinDto {
    const filteredData = asmaulHusna.filter(
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
      data: {
        statusCode: HttpStatus.OK,
        total: 1,
        data: filteredData,
      },
    };
  }
}

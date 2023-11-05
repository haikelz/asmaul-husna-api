import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import slugify from "slugify";

import { GraphqlGetLatinProps } from "../../../../interfaces";
import { asmaulHusna } from "../../../../lib/utils/data";

@Injectable()
export class LatinService {
  getDataBasedOnLatin(
    // latin must be string
    latin: string,
  ): GraphqlGetLatinProps {
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

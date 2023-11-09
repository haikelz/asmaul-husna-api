import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import slugify from "slugify";

import { GetDataBasedOnLatinDto } from "../../app/dto/get-data-based-on-latin.dto";
import { AllService } from "./all.service";

@Injectable()
export class LatinService {
  constructor(private readonly allService: AllService) {}

  getDataBasedOnLatin(
    // latin must be string
    latin: string,
  ): GetDataBasedOnLatinDto {
    const filteredData = this.allService.getAllAsmaulHusna().data.filter(
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
      statusCode: HttpStatus.OK,
      total: 1,
      data: filteredData,
    };
  }
}

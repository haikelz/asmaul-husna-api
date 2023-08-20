import { Injectable, NotFoundException } from "@nestjs/common";
import { filter, from } from "rxjs";
import slugify from "slugify";

import { ApiService } from "../api.service";

@Injectable()
export class LatinService {
  constructor(private readonly apiService: ApiService) {}

  getDataBasedOnLatin(
    // latin must be string
    latin: string,
  ) {
    const observable = from(this.apiService.getAllAsmaulHusna().data);

    const filteredData = observable.pipe(
      filter(
        (item) =>
          /**
           * - latin can be lowercase or uppercase
           * - In the end, it'll be transformed to lowercase format
           */
          slugify(item.latin, { lower: true }) ===
          slugify(latin, { lower: true }),
      ),
    );

    if (!filteredData) throw new NotFoundException();

    const obj = {
      statusCode: 200,
      total: 1,
    };

    filteredData.subscribe((item) => Object.assign(obj, { data: item }));

    return obj;
  }
}

import { Injectable, NotFoundException } from "@nestjs/common";

import { GraphqlGetUrutanDto } from "../../../app/dto/graphql/graphql-get-urutan.dto";
import { asmaulHusna } from "../../../data";

@Injectable()
export class UrutanService {
  getDataBasedOnUrutan(
    // urutan must be number
    urutan: string,
  ): GraphqlGetUrutanDto {
    const filteredData = asmaulHusna.filter(
      (item) =>
        // Compare urutan with item.urutan
        item.urutan === Number(urutan),
    )[0];

    if (!filteredData) throw new NotFoundException();

    return {
      data: {
        statusCode: 200,
        total: 1,
        data: filteredData,
      },
    };
  }
}

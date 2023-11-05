import { Injectable, NotFoundException } from "@nestjs/common";

import { GraphqlGetUrutanProps } from "../../../../interfaces";
import { asmaulHusna } from "../../../../lib/utils/data";

@Injectable()
export class UrutanService {
  getDataBasedOnUrutan(
    // urutan must be number
    urutan: string,
  ): GraphqlGetUrutanProps {
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

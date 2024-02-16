import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { asmaulHusna } from "lib/data";

import { GraphqlGetUrutanDto } from "../../../app/dto/graphql/graphql-get-urutan.dto";

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
      statusCode: HttpStatus.OK,
      total: 1,
      data: filteredData,
    };
  }
}

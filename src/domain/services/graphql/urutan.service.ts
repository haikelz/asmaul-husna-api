import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";

import { GraphqlGetUrutanDto } from "../../../app/dto/graphql/graphql-get-urutan.dto";
import { asmaulHusna } from "../../../lib/utils/data";

@Injectable()
export class UrutanService {
  public getDataBasedOnUrutan(urutan: string): GraphqlGetUrutanDto {
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

import { HttpStatus, Injectable } from "@nestjs/common";

import { GraphqlGetAllDto } from "../../../app/dto/graphql/graphql-get-all.dto";
import { handlePagination } from "../../../lib/helpers";
import { asmaulHusna } from "../../../lib/utils/data";

@Injectable()
export class AllService {
  public getAllAsmaulHusna(limit?: string, page?: string): GraphqlGetAllDto {
    const results = handlePagination({
      data: asmaulHusna,
      page: page,
      limit: limit,
    });

    return {
      statusCode: HttpStatus.OK,
      total: limit ? results.length : asmaulHusna.length,
      data: limit ? results : asmaulHusna,
    };
  }
}

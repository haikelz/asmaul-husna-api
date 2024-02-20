import { HttpStatus, Injectable } from "@nestjs/common";

import { GetAllAsmaulHusnaDto } from "../../app/dto/get-all-asmaul-husna.dto";
import { handlePagination } from "../../lib/helpers";
import { asmaulHusna } from "../../lib/utils/data";

@Injectable()
export class AllService {
  public getAllAsmaulHusna(
    limit?: string,
    page?: string,
  ): GetAllAsmaulHusnaDto {
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

import { HttpStatus, Injectable } from "@nestjs/common";

import { GraphqlGetAllDto } from "../../../app/dto/graphql/graphql-get-all.dto";
import { asmaulHusna } from "../../../lib/data";

@Injectable()
export class AllService {
  getAllAsmaulHusna(limit?: string): GraphqlGetAllDto {
    const limitData = asmaulHusna.slice(0, Math.round(Number(limit)));

    return {
      statusCode: HttpStatus.OK,
      total: limit ? limitData.length : asmaulHusna.length,
      data: limit ? limitData : asmaulHusna,
    };
  }
}

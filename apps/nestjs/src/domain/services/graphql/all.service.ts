import { HttpStatus, Injectable } from "@nestjs/common";

import { GraphqlGetAllDto } from "../../../app/dto/graphql/graphql-get-all.dto";
import { asmaulHusna } from "../../../data";

@Injectable()
export class AllService {
  getAllAsmaulHusna(): GraphqlGetAllDto {
    return {
      data: {
        statusCode: HttpStatus.OK,
        total: asmaulHusna.length,
        data: asmaulHusna,
      },
    };
  }
}

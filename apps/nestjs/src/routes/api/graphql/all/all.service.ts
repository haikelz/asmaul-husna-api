import { HttpStatus, Injectable } from "@nestjs/common";

import { GraphqlGetAllProps } from "../../../../interfaces";
import { asmaulHusna } from "../../../../lib/utils/data";

@Injectable()
export class AllService {
  getAllAsmaulHusna(): GraphqlGetAllProps {
    return {
      data: {
        statusCode: HttpStatus.OK,
        total: asmaulHusna.length,
        data: asmaulHusna,
      },
    };
  }
}

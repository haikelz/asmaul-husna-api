import { HttpStatus, Injectable } from "@nestjs/common";

import { GetAllAsmaulHusnaProps } from "../../interfaces";
import { asmaulHusna } from "../../lib/utils/data";

@Injectable()
export class ApiService {
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return {
      data: {
        statusCode: HttpStatus.OK,
        total: asmaulHusna.length,
        data: asmaulHusna,
      },
    };
  }
}

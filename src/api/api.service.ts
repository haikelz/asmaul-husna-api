import { Injectable } from "@nestjs/common";

import { GetAllAsmaulHusnaProps } from "../interfaces";
import { asmaulHusna } from "../lib/utils/data";

@Injectable()
export class ApiService {
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return {
      statusCode: 200,
      total: asmaulHusna.length,
      data: asmaulHusna,
    };
  }
}

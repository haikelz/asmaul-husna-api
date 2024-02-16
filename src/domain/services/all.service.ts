import { HttpStatus, Injectable } from "@nestjs/common";
import { asmaulHusna } from "lib/data";

import { GetAllAsmaulHusnaDto } from "../../app/dto/get-all-asmaul-husna.dto";

@Injectable()
export class AllService {
  getAllAsmaulHusna(limit?: string): GetAllAsmaulHusnaDto {
    const limitData = asmaulHusna.slice(0, Math.round(Number(limit)));

    return {
      statusCode: HttpStatus.OK,
      total: limit ? limitData.length : asmaulHusna.length,
      data: limit ? limitData : asmaulHusna,
    };
  }
}

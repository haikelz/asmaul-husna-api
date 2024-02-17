import { HttpStatus, Injectable } from "@nestjs/common";

import { GetAllAsmaulHusnaDto } from "../../app/dto/get-all-asmaul-husna.dto";
import { asmaulHusna } from "../../lib/data";

@Injectable()
export class AllService {
  getAllAsmaulHusna(limit?: string, page?: string): GetAllAsmaulHusnaDto {
    const fixedLimit = Math.round(Number(limit));
    const fixedPage = Math.round(Number(page));

    const results = asmaulHusna.slice(
      page ? fixedLimit * (fixedPage - 1) : 0,
      page ? fixedLimit * fixedPage : fixedLimit,
    );

    return {
      statusCode: HttpStatus.OK,
      total: limit ? results.length : asmaulHusna.length,
      data: limit ? results : asmaulHusna,
    };
  }
}

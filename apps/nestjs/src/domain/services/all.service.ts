import { HttpStatus, Injectable } from "@nestjs/common";

import { GetAllAsmaulHusnaDto } from "../../app/dto/get-all-asmaul-husna.dto";
import { asmaulHusna } from "../../data";

@Injectable()
export class AllService {
  getAllAsmaulHusna(): GetAllAsmaulHusnaDto {
    return {
      statusCode: HttpStatus.OK,
      total: asmaulHusna.length,
      data: asmaulHusna,
    };
  }
}

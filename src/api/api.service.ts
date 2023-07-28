import { Injectable } from "@nestjs/common";

import { AsmaulHusnaProps } from "../interfaces";
import { asmaulHusna } from "../lib/utils/data";

@Injectable()
export class ApiService {
  getAllAsmaulHusna(): AsmaulHusnaProps[] {
    return asmaulHusna;
  }
}

import { Injectable } from "@nestjs/common";
import { AsmaulHusnaProps } from "src/interfaces";
import { asmaulHusna } from "src/lib/utils/data";

@Injectable()
export class ApiService {
  getAllAsmaulHusna(): AsmaulHusnaProps[] {
    return asmaulHusna;
  }
}

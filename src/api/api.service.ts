import { AsmaulHusnaProps } from "@/interfaces";
import { asmaulHusna } from "@/lib/utils/data";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ApiService {
  getAllAsmaulHusna(): AsmaulHusnaProps[] {
    return asmaulHusna;
  }
}

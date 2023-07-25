import { Controller, Get } from "@nestjs/common";
import { AsmaulHusnaProps } from "../interfaces";
import { ApiService } from "./api.service";

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get("/api/all")
  getAllAsmaulHusna(): AsmaulHusnaProps[] {
    return this.apiService.getAllAsmaulHusna();
  }
}

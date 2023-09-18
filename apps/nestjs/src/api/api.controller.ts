import { Controller, Get } from "@nestjs/common";

import { GetAllAsmaulHusnaProps } from "../interfaces";
import { ApiService } from "./api.service";

@Controller("/api/all")
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get()
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return this.apiService.getAllAsmaulHusna();
  }
}

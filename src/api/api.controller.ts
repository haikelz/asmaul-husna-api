import { GetAllAsmaulHusnaProps } from "@/interfaces";
import { Controller, Get } from "@nestjs/common";

import { ApiService } from "./api.service";

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get("/api/all")
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return {
      statusCode: 200,
      total: this.apiService.getAllAsmaulHusna().length,
      data: this.apiService.getAllAsmaulHusna(),
    };
  }
}

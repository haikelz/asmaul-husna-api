import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { GetAllAsmaulHusnaProps } from "../interfaces";
import { ApiService } from "./api.service";

@Controller()
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @TypedRoute.Get("/api/all")
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return {
      statusCode: 200,
      total: this.apiService.getAllAsmaulHusna().length,
      data: this.apiService.getAllAsmaulHusna(),
    };
  }
}

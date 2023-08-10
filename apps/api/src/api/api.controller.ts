import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { GetAllAsmaulHusnaProps } from "../interfaces";
import { ApiService } from "./api.service";

@Controller("/api/all")
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @TypedRoute.Get()
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return this.apiService.getAllAsmaulHusna();
  }
}

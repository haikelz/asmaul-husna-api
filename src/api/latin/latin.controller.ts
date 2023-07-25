import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import slugify from "slugify";
import { ApiService } from "../api.service";

@Controller()
export class LatinController {
  constructor(private readonly apiService: ApiService) {}

  // get data based on latin
  @Get("/api/latin/:latin")
  getDataBasedOnLatin(@Param() latin: { latin: string }) {
    const filteredData = this.apiService
      .getAllAsmaulHusna()
      .filter(
        (item) =>
          slugify(item.latin, { lower: true }) ===
          slugify(latin.latin, { lower: true }),
      )[0];

    if (!filteredData) throw new NotFoundException();
    return filteredData;
  }
}

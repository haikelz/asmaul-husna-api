import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { GetDataBasedOnLatinProps } from "interfaces";
import slugify from "slugify";
import { ApiService } from "../api.service";

@Controller()
export class LatinController {
  constructor(private readonly apiService: ApiService) {}

  // get data based on latin
  @Get("/api/latin/:latin")
  getDataBasedOnLatin(
    @Param() param: { latin: string },
  ): GetDataBasedOnLatinProps {
    const filteredData = this.apiService
      .getAllAsmaulHusna()
      .filter(
        (item) =>
          slugify(item.latin, { lower: true }) ===
          slugify(param.latin, { lower: true }),
      )[0];

    if (!filteredData) throw new NotFoundException();
    return {
      statusCode: 200,
      total: 1,
      data: filteredData,
    };
  }
}

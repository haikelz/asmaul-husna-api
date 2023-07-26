import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { GetDataBasedOnUrutanProps } from "../../interfaces";
import { ApiService } from "../api.service";

@Controller()
export class UrutanController {
  constructor(private readonly apiService: ApiService) {}

  // get data based on urutan
  @Get("/api/:urutan")
  getDataBasedOnUrutan(
    @Param() param: { urutan: string },
  ): GetDataBasedOnUrutanProps {
    const filteredData = this.apiService
      .getAllAsmaulHusna()
      .filter((item) => item.urutan === Number(param.urutan))[0];

    if (!filteredData) throw new NotFoundException();
    return {
      statusCode: 200,
      total: 1,
      data: filteredData,
    };
  }
}

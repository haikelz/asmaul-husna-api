import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { ApiService } from "../api.service";

@Controller()
export class UrutanController {
  constructor(private readonly apiService: ApiService) {}

  // get data based on urutan
  @Get("/api/:urutan")
  getDataBasedOnUrutan(@Param() urutan: { urutan: string }) {
    const filteredData = this.apiService
      .getAllAsmaulHusna()
      .filter((item) => item.urutan === Number(urutan.urutan))[0];

    if (!filteredData) throw new NotFoundException();
    return filteredData;
  }
}

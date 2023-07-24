import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "./app.service";
import { GetAllDataProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllAsmaulHusna(): GetAllDataProps {
    return this.appService.getAllData();
  }

  @Get("/:urutan")
  getUrutan(@Param() urutan: { urutan: number }) {
    return this.appService
      .getAllData()
      .asmaulHusna.filter((item) => item.urutan === Number(urutan.urutan));
  }
}

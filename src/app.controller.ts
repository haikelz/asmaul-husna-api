import { Controller, Get, Param } from "@nestjs/common";
import slugify from "slugify";
import { AppService } from "./app.service";
import { GetAllDataProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllData(): GetAllDataProps {
    return this.appService.getAllData();
  }

  // get data based on urutan
  @Get("/:urutan")
  getDataBasedOnUrutan(@Param() urutan: { urutan: number }) {
    return this.appService
      .getAllData()
      .asmaulHusna.filter((item) => item.urutan === Number(urutan.urutan));
  }

  // get data based on latin
  @Get("/latin/:latin")
  getDataBasedOnLatin(@Param() latin: { latin: string }) {
    return this.appService
      .getAllData()
      .asmaulHusna.filter(
        (item) =>
          slugify(item.latin, { lower: true }) ===
          slugify(latin.latin, { lower: true }),
      );
  }
}

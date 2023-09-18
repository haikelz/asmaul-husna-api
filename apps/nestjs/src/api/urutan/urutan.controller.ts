import { Controller, Get, Param } from "@nestjs/common";

import { UrutanService } from "./urutan.service";

@Controller("/api/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @Get()
  getDataBasedOnUrutan(
    // urutan must be number
    @Param("urutan") urutan: string,
  ) {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

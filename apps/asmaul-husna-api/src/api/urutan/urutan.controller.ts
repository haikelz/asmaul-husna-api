import { TypedParam } from "@nestia/core";
import { Controller, Get } from "@nestjs/common";

import { UrutanService } from "./urutan.service";

@Controller("/api/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @Get()
  getDataBasedOnUrutan(
    // urutan must be number
    @TypedParam("urutan") urutan: number,
  ) {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

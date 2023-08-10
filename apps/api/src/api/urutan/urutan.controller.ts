import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { UrutanService } from "./urutan.service";

@Controller()
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @TypedRoute.Get("/api/:urutan")
  getDataBasedOnUrutan(
    // urutan must be number
    @TypedParam("urutan") urutan: number,
  ) {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

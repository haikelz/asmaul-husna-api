import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UrutanService } from "./urutan.service";

@ApiTags("api")
@Controller("/api/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @Post()
  getDataBasedOnUrutan(
    // urutan must be number
    @Param("urutan") urutan: string,
  ) {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GraphqlGetUrutanProps } from "../../../../interfaces";
import { UrutanService } from "./urutan.service";

@ApiTags("api")
@Controller("/api/graphql/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @Post()
  getDataBasedOnUrutan(
    // urutan must be number
    @Param("urutan") urutan: string,
  ): GraphqlGetUrutanProps {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

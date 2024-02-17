import { TypedParam, TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";

import { UrutanService } from "../../domain/services/urutan.service";
import { GetDataBasedOnUrutanDto } from "../dto/get-data-based-on-urutan.dto";

@ApiTags("api")
@ApiParam({
  name: "urutan",
  description: "GET the data based on urutan",
  type: "string",
  required: true,
})
@Controller("/api/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @TypedRoute.Get()
  getDataBasedOnUrutan(
    // urutan must be number
    @TypedParam("urutan") urutan: string,
  ): GetDataBasedOnUrutanDto {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

import { TypedRoute } from "@nestia/core";
import { Controller, Param } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";

import { UrutanService } from "../../../domain/services/graphql/urutan.service";
import { GraphqlGetUrutanDto } from "../../dto/graphql/graphql-get-urutan.dto";

@ApiTags("api")
@ApiParam({
  name: "urutan",
  description: "POST data based on urutan",
  type: "string",
  required: true,
})
@Controller("/api/graphql/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @TypedRoute.Post()
  public getDataBasedOnUrutan(
    // urutan must be number
    @Param("urutan") urutan: string,
  ): GraphqlGetUrutanDto {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

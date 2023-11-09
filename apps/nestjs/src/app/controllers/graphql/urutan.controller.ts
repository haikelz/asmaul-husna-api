import { Controller, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { UrutanService } from "../../../domain/services/graphql/urutan.service";
import { GraphqlGetUrutanDto } from "../../dto/graphql/graphql-get-urutan.dto";

@ApiTags("api")
@Controller("/api/graphql/:urutan")
export class UrutanController {
  constructor(private readonly urutanService: UrutanService) {}

  // get data based on urutan
  @Post()
  getDataBasedOnUrutan(
    // urutan must be number
    @Param("urutan") urutan: string,
  ): GraphqlGetUrutanDto {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

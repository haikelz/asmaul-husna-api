import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AllService } from "../../../domain/services/graphql/all.service";
import { GraphqlGetAllDto } from "../../dto/graphql/graphql-get-all.dto";

@ApiTags("api")
@Controller("/api/graphql/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Post()
  getAllAsmaulHusna(): GraphqlGetAllDto {
    return this.allService.getAllAsmaulHusna();
  }
}

import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GraphqlGetAllProps } from "../../../../interfaces";
import { AllService } from "./all.service";

@ApiTags("api")
@Controller("/api/graphql/all")
export class AllController {
  constructor(private readonly allService: AllService) {}

  @Post()
  getAllAsmaulHusna(): GraphqlGetAllProps {
    return this.allService.getAllAsmaulHusna();
  }
}

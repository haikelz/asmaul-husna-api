import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetAllDto } from "../../../app/dto/graphql/graphql-get-all.dto";
import { AllService } from "../../../domain/services/graphql/all.service";
import { GetAllAsmaulHusna } from "../../../infra/models/graphql/all.model";

@Resolver(() => GetAllAsmaulHusna)
export class AllResolver {
  constructor(private readonly allService: AllService) {}

  @Query(() => GetAllAsmaulHusna, {
    name: "GetAllAsmaulHusna",
    nullable: false,
  })
  getAllAsmaulHusna(): GraphqlGetAllDto {
    return this.allService.getAllAsmaulHusna();
  }
}

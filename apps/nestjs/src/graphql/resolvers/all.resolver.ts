import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetAllProps } from "../../interfaces";
import { AllService } from "../../routes/api/graphql/all/all.service";
import { GetAllAsmaulHusna } from "../models/all.model";

@Resolver(() => GetAllAsmaulHusna)
export class AllResolver {
  constructor(private readonly allService: AllService) {}

  @Query(() => GetAllAsmaulHusna, {
    name: "GetAllAsmaulHusna",
    nullable: false,
  })
  getAllAsmaulHusna(): GraphqlGetAllProps {
    return this.allService.getAllAsmaulHusna();
  }
}

import { Query, Resolver } from "@nestjs/graphql";

import { GetAllAsmaulHusnaProps } from "../../interfaces";
import { ApiService } from "../../routes/api/api.service";
import { GetAllAsmaulHusna } from "../models/api.model";

@Resolver(() => GetAllAsmaulHusna)
export class ApiResolver {
  constructor(private readonly apiService: ApiService) {}

  @Query(() => GetAllAsmaulHusna, {
    name: "GetAllAsmaulHusna",
    nullable: false,
  })
  getAllAsmaulHusna(): GetAllAsmaulHusnaProps {
    return this.apiService.getAllAsmaulHusna();
  }
}

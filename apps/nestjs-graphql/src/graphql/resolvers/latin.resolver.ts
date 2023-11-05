import { Query, Resolver } from "@nestjs/graphql";

import { LatinService } from "../../routes/api/latin/latin.service";
import { GetDataBasedOnLatin } from "../models/latin.model";

@Resolver(() => GetDataBasedOnLatin)
export class LatinResolver {
  constructor(private readonly latinService: LatinService) {}

  @Query(() => GetDataBasedOnLatin, {
    name: "GetDataBasedOnLatin",
    nullable: false,
  })
  getDataBasedOnLatin(latin: string) {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

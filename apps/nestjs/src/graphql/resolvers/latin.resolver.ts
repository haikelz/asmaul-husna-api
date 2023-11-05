import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetLatinProps } from "../../interfaces";
import { LatinService } from "../../routes/api/graphql/latin/latin.service";
import { GetDataBasedOnLatin } from "../models/latin.model";

@Resolver(() => GetDataBasedOnLatin)
export class LatinResolver {
  constructor(private readonly latinService: LatinService) {}

  @Query(() => GetDataBasedOnLatin, {
    name: "GetDataBasedOnLatin",
    nullable: false,
  })
  getDataBasedOnLatin(latin: string): GraphqlGetLatinProps {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

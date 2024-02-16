import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetLatinDto } from "../../../app/dto/graphql/graphql-get-latin.dto";
import { LatinService } from "../../../domain/services/graphql/latin.service";
import { GetDataBasedOnLatin } from "../../../infra/models/graphql/latin.model";

@Resolver(() => GetDataBasedOnLatin)
export class LatinResolver {
  constructor(private readonly latinService: LatinService) {}

  @Query(() => GetDataBasedOnLatin, {
    name: "GetDataBasedOnLatin",
    nullable: false,
  })
  getDataBasedOnLatin(latin: string): GraphqlGetLatinDto {
    return this.latinService.getDataBasedOnLatin(latin);
  }
}

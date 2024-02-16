import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetHomeDto } from "../../../app/dto/graphql/graphql-get-home.dto";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { GetHomeData } from "../../../infra/models/graphql/graphql.model";

@Resolver(() => GetHomeData)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Query(() => GetHomeData, { name: "GetHomeData", nullable: false })
  getHomeData(): GraphqlGetHomeDto {
    return this.graphqlService.getHomeData();
  }
}

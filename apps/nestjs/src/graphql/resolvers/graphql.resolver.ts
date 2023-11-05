import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetHomeProps } from "../../interfaces";
import { GraphqlService } from "../../routes/api/graphql/graphql.service";
import { GetHomeData } from "../models/graphql.model";

@Resolver(() => GetHomeData)
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Query(() => GetHomeData, { name: "GetHomeData", nullable: false })
  getHomeData(): GraphqlGetHomeProps {
    return this.graphqlService.getHomeData();
  }
}

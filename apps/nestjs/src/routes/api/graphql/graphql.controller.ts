import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GraphqlGetHomeProps } from "../../../interfaces";
import { GraphqlService } from "./graphql.service";

@ApiTags("api")
@Controller("/api/graphql")
export class GraphqlController {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Post()
  getHomeData(): GraphqlGetHomeProps {
    return this.graphqlService.getHomeData();
  }
}

import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { GraphqlGetHomeDto } from "../../dto/graphql/graphql-get-home.dto";

@ApiTags("api")
@Controller("/api/graphql")
export class GraphqlController {
  constructor(private readonly graphqlService: GraphqlService) {}

  @TypedRoute.Post()
  getHomeData(): GraphqlGetHomeDto {
    return this.graphqlService.getHomeData();
  }
}

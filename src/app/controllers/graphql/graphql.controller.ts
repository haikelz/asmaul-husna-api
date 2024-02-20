import { TypedRoute } from "@nestia/core";
import { Controller, HttpStatus } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { GraphqlGetHomeDto } from "../../dto/graphql/graphql-get-home.dto";

@ApiTags("api")
@ApiResponse({ status: HttpStatus.OK, schema: { example: GraphqlGetHomeDto } })
@Controller("/api/graphql")
export class GraphqlController {
  constructor(private readonly graphqlService: GraphqlService) {}

  @TypedRoute.Post()
  public getHomeData(): GraphqlGetHomeDto {
    return this.graphqlService.getHomeData();
  }
}

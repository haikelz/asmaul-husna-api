import { Query, Resolver } from "@nestjs/graphql";

import { AppService } from "../../app.service";
import { GetHomeData } from "../models/app.model";

@Resolver(() => GetHomeData)
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => GetHomeData, { name: "GetHomeData", nullable: false })
  getHomeData() {
    return this.appService.getHomeData();
  }
}

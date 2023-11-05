import { Module } from "@nestjs/common";

import { LatinResolver } from "../../../../graphql/resolvers/latin.resolver";
import { GraphqlService } from "../graphql.service";
import { LatinController } from "./latin.controller";
import { LatinService } from "./latin.service";

@Module({
  controllers: [LatinController],
  providers: [GraphqlService, LatinService, LatinResolver],
})
export class LatinModule {}

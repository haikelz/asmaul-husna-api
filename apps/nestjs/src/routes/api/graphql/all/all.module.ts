import { Module } from "@nestjs/common";

import { AllResolver } from "../../../../graphql/resolvers/all.resolver";
import { GraphqlService } from "../graphql.service";
import { AllController } from "./all.controller";
import { AllService } from "./all.service";

@Module({
  controllers: [AllController],
  providers: [AllService, GraphqlService, AllResolver],
})
export class AllModule {}

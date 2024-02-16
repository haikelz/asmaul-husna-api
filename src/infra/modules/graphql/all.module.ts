import { Module } from "@nestjs/common";

import { AllController } from "../../../app/controllers/graphql/all.controller";
import { AllResolver } from "../../../domain/resolvers/graphql/all.resolver";
import { AllService } from "../../../domain/services/graphql/all.service";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";

@Module({
  controllers: [AllController],
  providers: [AllService, GraphqlService, AllResolver],
})
export class AllModule {}

import { Module } from "@nestjs/common";

import { LatinController } from "../../../app/controllers/graphql/latin.controller";
import { LatinResolver } from "../../../domain/resolvers/graphql/latin.resolver";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { LatinService } from "../../../domain/services/graphql/latin.service";

@Module({
  controllers: [LatinController],
  providers: [GraphqlService, LatinService, LatinResolver],
})
export class LatinModule {}

import { Module } from "@nestjs/common";

import { UrutanController } from "../../../app/controllers/graphql/urutan.controller";
import { UrutanResolver } from "../../../domain/resolvers/graphql/urutan.resolver";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { UrutanService } from "../../../domain/services/graphql/urutan.service";

@Module({
  controllers: [UrutanController],
  providers: [GraphqlService, UrutanService, UrutanResolver],
})
export class UrutanModule {}

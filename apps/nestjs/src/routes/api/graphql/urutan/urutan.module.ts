import { Module } from "@nestjs/common";

import { UrutanResolver } from "../../../../graphql/resolvers/urutan.resolver";
import { GraphqlService } from "../graphql.service";
import { UrutanController } from "./urutan.controller";
import { UrutanService } from "./urutan.service";

@Module({
  controllers: [UrutanController],
  providers: [GraphqlService, UrutanService, UrutanResolver],
})
export class UrutanModule {}

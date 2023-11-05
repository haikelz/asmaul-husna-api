import { Module } from "@nestjs/common";

import { UrutanResolver } from "../../../graphql/resolvers/urutan.resolver";
import { ApiService } from "../api.service";
import { UrutanController } from "./urutan.controller";
import { UrutanService } from "./urutan.service";

@Module({
  controllers: [UrutanController],
  providers: [ApiService, UrutanService, UrutanResolver],
})
export class UrutanModule {}

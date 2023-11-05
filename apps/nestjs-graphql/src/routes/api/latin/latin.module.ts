import { Module } from "@nestjs/common";

import { LatinResolver } from "../../../graphql/resolvers/latin.resolver";
import { ApiService } from "../api.service";
import { LatinController } from "./latin.controller";
import { LatinService } from "./latin.service";

@Module({
  controllers: [LatinController],
  providers: [ApiService, LatinService, LatinResolver],
})
export class LatinModule {}

import { Module } from "@nestjs/common";

import { ApiService } from "../api.service";
import { LatinController } from "./latin.controller";
import { LatinService } from "./latin.service";

@Module({
  controllers: [LatinController],
  providers: [ApiService, LatinService],
})
export class LatinModule {}

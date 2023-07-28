import { Module } from "@nestjs/common";

import { ApiService } from "../api.service";
import { LatinController } from "./latin.controller";

@Module({
  controllers: [LatinController],
  providers: [ApiService],
})
export class LatinModule {}

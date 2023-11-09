import { Module } from "@nestjs/common";

import { LatinController } from "../../app/controllers/latin.controller";
import { AllService } from "../../domain/services/all.service";
import { LatinService } from "../../domain/services/latin.service";

@Module({
  controllers: [LatinController],
  providers: [AllService, LatinService],
})
export class LatinModule {}

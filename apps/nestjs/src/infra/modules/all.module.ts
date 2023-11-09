import { Module } from "@nestjs/common";

import { AllController } from "../../app/controllers/all.controller";
import { AllService } from "../../domain/services/all.service";

@Module({
  controllers: [AllController],
  providers: [AllService],
})
export class AllModule {}

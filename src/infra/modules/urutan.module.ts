import { Module } from "@nestjs/common";

import { UrutanController } from "../../app/controllers/urutan.controller";
import { AllService } from "../../domain/services/all.service";
import { UrutanService } from "../../domain/services/urutan.service";

@Module({
  controllers: [UrutanController],
  providers: [AllService, UrutanService],
})
export class UrutanModule {}

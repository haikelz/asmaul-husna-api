import { Module } from "@nestjs/common";

import { ApiService } from "../api.service";
import { UrutanController } from "./urutan.controller";
import { UrutanService } from "./urutan.service";

@Module({
  controllers: [UrutanController],
  providers: [ApiService, UrutanService],
})
export class UrutanModule {}

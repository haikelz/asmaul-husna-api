import { Module } from "@nestjs/common";

import { ApiService } from "../api.service";
import { UrutanController } from "./urutan.controller";

@Module({
  controllers: [UrutanController],
  providers: [ApiService],
})
export class UrutanModule {}

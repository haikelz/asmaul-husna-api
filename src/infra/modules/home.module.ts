import { Module } from "@nestjs/common";

import { HomeController } from "../../app/controllers/home.controller";
import { HomeService } from "../../domain/services/home.service";

@Module({
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}

import { Module } from "@nestjs/common";

import { HomeService } from "../../domain/services/home.service";

@Module({
  controllers: [],
  providers: [HomeService],
})
export class HomeModule {}

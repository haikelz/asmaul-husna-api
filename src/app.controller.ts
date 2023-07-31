import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";

import { AppService } from "./app.service";
import { GetHomeDataProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @TypedRoute.Get()
  getHomeData(): GetHomeDataProps {
    return this.appService.getHomeData();
  }
}

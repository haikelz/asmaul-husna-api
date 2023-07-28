import { Controller, Get } from "@nestjs/common";

import { AppService } from "./app.service";
import { GetHomeDataProps } from "./interfaces";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHomeData(): GetHomeDataProps {
    return this.appService.getHomeData();
  }
}

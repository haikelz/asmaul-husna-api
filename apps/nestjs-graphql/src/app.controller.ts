import { Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { AppService } from "./app.service";
import { GetHomeDataProps } from "./interfaces";

@ApiTags("info")
@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHomeData(): GetHomeDataProps {
    return this.appService.getHomeData();
  }
}

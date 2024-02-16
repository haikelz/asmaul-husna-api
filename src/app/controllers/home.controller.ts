import { TypedRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import { HomeService } from "../../domain/services/home.service";
import { GetHomeDataDto } from "../dto/get-home-data.dto";

@ApiTags("info")
@Controller("/")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @TypedRoute.Get()
  getHomeData(): GetHomeDataDto {
    return this.homeService.getHomeData();
  }
}

import { TypedRoute } from "@nestia/core";
import { Controller, HttpStatus } from "@nestjs/common";
import { ApiResponse, ApiTags } from "@nestjs/swagger";

import { HomeService } from "../../domain/services/home.service";
import { GetHomeDataDto } from "../dto/get-home-data.dto";

@ApiTags("info")
@ApiResponse({
  status: HttpStatus.OK,
  schema: { example: GetHomeDataDto },
})
@Controller("/")
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @TypedRoute.Get()
  getHomeData(): GetHomeDataDto {
    return this.homeService.getHomeData();
  }
}

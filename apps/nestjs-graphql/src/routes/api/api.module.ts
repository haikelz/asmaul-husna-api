import { Module } from "@nestjs/common";

import { ApiResolver } from "../../graphql/resolvers/api.resolver";
import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";
import { LatinModule } from "./latin/latin.module";
import { UrutanModule } from "./urutan/urutan.module";

@Module({
  imports: [LatinModule, UrutanModule],
  controllers: [ApiController],
  providers: [ApiService, ApiResolver],
})
export class ApiModule {}

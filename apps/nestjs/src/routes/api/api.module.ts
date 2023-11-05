import { Module } from "@nestjs/common";

import { ApiController } from "./api.controller";
import { ApiService } from "./api.service";
import { GraphqlModule } from "./graphql/graphql.module";
import { LatinModule } from "./latin/latin.module";
import { UrutanModule } from "./urutan/urutan.module";

@Module({
  imports: [LatinModule, UrutanModule, GraphqlModule],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}

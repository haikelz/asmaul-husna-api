import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ZodValidationPipe } from "nestjs-zod";

import { HomeController } from "./app/controllers/home.controller";
import { HomeService } from "./domain/services/home.service";
import { AllModule } from "./infra/modules/all.module";
import { GraphqlModule } from "./infra/modules/graphql/graphql.module";
import { HomeModule } from "./infra/modules/home.module";
import { LatinModule } from "./infra/modules/latin.module";
import { UrutanModule } from "./infra/modules/urutan.module";

/**
 * @see https://docs.nestjs.com/techniques/caching
 */
@Module({
  imports: [
    HomeModule,
    LatinModule,
    UrutanModule,
    AllModule,
    GraphqlModule,
    CacheModule.register({ isGlobal: true }),
  ],
  providers: [
    HomeService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}

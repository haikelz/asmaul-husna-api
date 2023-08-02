import { CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";

import { ApiModule } from "./api/api.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

/**
 * @see https://docs.nestjs.com/techniques/caching
 */
@Module({
  imports: [ApiModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

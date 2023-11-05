import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { CacheInterceptor, CacheModule } from "@nestjs/cache-manager";
import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AppResolver } from "./graphql/resolvers/app.resolver";
import { ApiModule } from "./routes/api/api.module";

/**
 * @see https://docs.nestjs.com/techniques/caching
 */
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: "src/schema.gql",
      installSubscriptionHandlers: true,
    }),
    ApiModule,
    CacheModule.register({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AppResolver,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}

import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { GraphqlResolver } from "../../../graphql/resolvers/graphql.resolver";
import { AllModule } from "./all/all.module";
import { GraphqlController } from "./graphql.controller";
import { GraphqlService } from "./graphql.service";
import { LatinModule } from "./latin/latin.module";
import { UrutanModule } from "./urutan/urutan.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    AllModule,
    LatinModule,
    UrutanModule,
  ],
  controllers: [GraphqlController],
  providers: [GraphqlService, GraphqlResolver],
})
export class GraphqlModule {}

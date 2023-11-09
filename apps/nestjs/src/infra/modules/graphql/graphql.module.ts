import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { GraphqlController } from "../../../app/controllers/graphql/graphql.controller";
import { GraphqlResolver } from "../../../domain/resolvers/graphql/graphql.resolver";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { AllModule } from "./all.module";
import { LatinModule } from "./latin.module";
import { UrutanModule } from "./urutan.module";

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

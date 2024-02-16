import { Query, Resolver } from "@nestjs/graphql";

import { GraphqlGetUrutanDto } from "../../../app/dto/graphql/graphql-get-urutan.dto";
import { UrutanService } from "../../../domain/services/graphql/urutan.service";
import { GetDataBasedOnUrutan } from "../../../infra/models/graphql/urutan.model";

@Resolver(() => GetDataBasedOnUrutan)
export class UrutanResolver {
  constructor(private readonly urutanService: UrutanService) {}

  @Query(() => GetDataBasedOnUrutan, {
    name: "GetDataBasedOnUrutan",
    nullable: false,
  })
  getDataBasedOnUrutan(urutan: string): GraphqlGetUrutanDto {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

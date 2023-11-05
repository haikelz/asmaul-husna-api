import { Query, Resolver } from "@nestjs/graphql";

import { UrutanService } from "../../routes/api/urutan/urutan.service";
import { GetDataBasedOnUrutan } from "../models/urutan.model";

@Resolver(() => GetDataBasedOnUrutan)
export class UrutanResolver {
  constructor(private readonly urutanService: UrutanService) {}

  @Query(() => GetDataBasedOnUrutan, {
    name: "GetDataBasedOnUrutan",
    nullable: false,
  })
  getDataBasedOnUrutan(urutan: string) {
    return this.urutanService.getDataBasedOnUrutan(urutan);
  }
}

import { HttpStatus } from "@nestjs/common";
import { Field, Int, ObjectType } from "@nestjs/graphql";

import { Data } from "./all.model";

@ObjectType()
export class GetDataBasedOnUrutan {
  @Field(() => Int, { nullable: false })
  statusCode: HttpStatus.OK;

  @Field(() => Int, { nullable: false })
  total: number;

  @Field(() => Data, { nullable: false })
  data: Data;
}

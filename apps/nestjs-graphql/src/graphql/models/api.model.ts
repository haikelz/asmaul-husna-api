import { HttpStatus } from "@nestjs/common";
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Data {
  @Field(() => Int)
  urutan: number;

  @Field({ nullable: false })
  latin: string;

  @Field({ nullable: false })
  arab: string;

  @Field({ nullable: false })
  arti: string;
}

@ObjectType()
export class GetAllAsmaulHusna {
  @Field(() => Int, { nullable: false })
  statusCode: HttpStatus.OK;

  @Field(() => Int, { nullable: false })
  total: number;

  @Field(() => [Data], { nullable: false })
  data: [Data];
}

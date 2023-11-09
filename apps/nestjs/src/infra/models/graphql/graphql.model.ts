import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
class Endpoints {
  @Field({ nullable: false })
  all: string;

  @Field({ nullable: false })
  urutan: string;

  @Field({ nullable: false })
  latin: string;
}

@ObjectType()
export class GetHomeData {
  @Field({ nullable: false })
  author: string;

  @Field({ nullable: false })
  repository: string;

  @Field(() => Endpoints, { nullable: false })
  endpoints: Endpoints;
}

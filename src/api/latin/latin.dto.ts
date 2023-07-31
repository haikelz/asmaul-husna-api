import { IsString } from "class-validator";

export class FindLatinParams {
  // latin must be string
  @IsString()
  latin: string;
}

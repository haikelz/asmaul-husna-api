import { IsNumberString } from "class-validator";

export class FindUrutanParams {
  // urutan must be string but only contains numeric value
  @IsNumberString()
  urutan: string;
}

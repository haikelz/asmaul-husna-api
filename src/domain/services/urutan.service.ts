import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";

import { GetDataBasedOnUrutanDto } from "../../app/dto/get-data-based-on-urutan.dto";
import { AllService } from "./all.service";

@Injectable()
export class UrutanService {
  constructor(private readonly allService: AllService) {}

  public getDataBasedOnUrutan(
    // urutan must be string
    urutan: string,
  ): GetDataBasedOnUrutanDto {
    const filteredData = this.allService.getAllAsmaulHusna().data.filter(
      (item) =>
        // Compare urutan with item.urutan
        item.urutan === Number(urutan),
    )[0];

    if (!filteredData) throw new NotFoundException();

    return {
      statusCode: HttpStatus.OK,
      total: 1,
      data: filteredData,
    };
  }
}

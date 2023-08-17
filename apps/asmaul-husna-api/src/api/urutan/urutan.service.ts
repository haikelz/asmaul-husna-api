import { Injectable, NotFoundException } from "@nestjs/common";

import { GetDataBasedOnUrutanProps } from "../../interfaces";
import { ApiService } from "../api.service";

@Injectable()
export class UrutanService {
  constructor(private readonly apiService: ApiService) {}

  getDataBasedOnUrutan(
    // urutan must be number
    urutan: number,
  ): GetDataBasedOnUrutanProps {
    const filteredData = this.apiService.getAllAsmaulHusna().data.filter(
      (item) =>
        // Compare urutan with item.urutan
        item.urutan === urutan,
    )[0];

    if (!filteredData) throw new NotFoundException();
    return {
      statusCode: 200,
      total: 1,
      data: filteredData,
    };
  }
}

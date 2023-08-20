import { Injectable, NotFoundException } from "@nestjs/common";
import { filter, from } from "rxjs";

import { ApiService } from "../api.service";

@Injectable()
export class UrutanService {
  constructor(private readonly apiService: ApiService) {}

  getDataBasedOnUrutan(
    // urutan must be number
    urutan: number,
  ) {
    const observable = from(this.apiService.getAllAsmaulHusna().data);

    const filteredData = observable.pipe(
      filter(
        (item) =>
          // Compare urutan with item.urutan
          item.urutan === urutan,
      ),
    );

    if (!filteredData) throw new NotFoundException();

    const obj = {
      statusCode: 200,
      total: 1,
    };

    filteredData.subscribe((item) => Object.assign(obj, { data: item }));

    return obj;
  }
}

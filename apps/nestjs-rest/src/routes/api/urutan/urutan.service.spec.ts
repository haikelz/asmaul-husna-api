import { Test, TestingModule } from "@nestjs/testing";

import { ApiService } from "../api.service";
import { UrutanService } from "./urutan.service";

describe("UrutanService", () => {
  let service: UrutanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService, UrutanService],
    }).compile();

    service = module.get<ApiService, UrutanService>(UrutanService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

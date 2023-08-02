import { Test, TestingModule } from "@nestjs/testing";

import { ApiService } from "../api.service";
import { LatinService } from "./latin.service";

describe("LatinService", () => {
  let service: LatinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService, LatinService],
    }).compile();

    service = module.get<ApiService, LatinService>(LatinService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

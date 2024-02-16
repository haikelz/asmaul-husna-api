import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../services/all.service";
import { LatinService } from "../services/latin.service";

describe("LatinService", () => {
  let service: LatinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllService, LatinService],
    }).compile();

    service = module.get<AllService, LatinService>(LatinService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

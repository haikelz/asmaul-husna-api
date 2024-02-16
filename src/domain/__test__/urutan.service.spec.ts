import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../services/all.service";
import { UrutanService } from "../services/urutan.service";

describe("UrutanService", () => {
  let service: UrutanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllService, UrutanService],
    }).compile();

    service = module.get<AllService, UrutanService>(UrutanService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

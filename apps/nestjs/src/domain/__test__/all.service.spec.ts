import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../services/all.service";

describe("AllService", () => {
  let service: AllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllService],
    }).compile();

    service = module.get<AllService>(AllService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from "@nestjs/testing";

import { AllController } from "./all.controller";
import { AllService } from "./all.service";

describe("ApiController", () => {
  let controller: AllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllController],
      providers: [AllService],
    }).compile();

    controller = module.get<AllController>(AllController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

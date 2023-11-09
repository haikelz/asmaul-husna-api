import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../domain/services/all.service";
import { AllController } from "../controllers/all.controller";

describe("LatinController", () => {
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

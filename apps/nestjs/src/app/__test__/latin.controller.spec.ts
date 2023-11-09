import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../domain/services/all.service";
import { LatinService } from "../../domain/services/latin.service";
import { LatinController } from "../controllers/latin.controller";

describe("LatinController", () => {
  let controller: LatinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatinController],
      providers: [AllService, LatinService],
    }).compile();

    controller = module.get<LatinController>(LatinController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

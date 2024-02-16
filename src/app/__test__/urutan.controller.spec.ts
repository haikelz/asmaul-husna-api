import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../domain/services/all.service";
import { UrutanService } from "../../domain/services/urutan.service";
import { UrutanController } from "../controllers/urutan.controller";

describe("UrutanController", () => {
  let controller: UrutanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrutanController],
      providers: [AllService, UrutanService],
    }).compile();

    controller = module.get<UrutanController>(UrutanController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../domain/services/all.service";
import { HomeService } from "../../domain/services/home.service";
import { HomeController } from "../controllers/home.controller";

describe("LatinController", () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

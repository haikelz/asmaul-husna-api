import { Test, TestingModule } from "@nestjs/testing";

import { ApiService } from "../api.service";
import { LatinController } from "./latin.controller";
import { LatinService } from "./latin.service";

describe("LatinController", () => {
  let controller: LatinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatinController],
      providers: [ApiService, LatinService],
    }).compile();

    controller = module.get<LatinController>(LatinController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
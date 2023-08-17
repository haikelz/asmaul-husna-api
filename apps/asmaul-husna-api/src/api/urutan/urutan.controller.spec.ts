import { Test, TestingModule } from "@nestjs/testing";

import { ApiService } from "../api.service";
import { UrutanController } from "./urutan.controller";
import { UrutanService } from "./urutan.service";

describe("UrutanController", () => {
  let controller: UrutanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrutanController],
      providers: [ApiService, UrutanService],
    }).compile();

    controller = module.get<UrutanController>(UrutanController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

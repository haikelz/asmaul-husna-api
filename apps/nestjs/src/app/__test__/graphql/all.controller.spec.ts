import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../../domain/services/graphql/all.service";
import { AllController } from "../../controllers/graphql/all.controller";

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

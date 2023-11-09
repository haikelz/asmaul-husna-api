import { Test, TestingModule } from "@nestjs/testing";

import { UrutanResolver } from "../../../domain/resolvers/graphql/urutan.resolver";
import { UrutanService } from "../../../domain/services/graphql/urutan.service";
import { UrutanController } from "../../controllers/graphql/urutan.controller";

describe("UrutanController", () => {
  let controller: UrutanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrutanController],
      providers: [UrutanService, UrutanResolver],
    }).compile();

    controller = module.get<UrutanController>(UrutanController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

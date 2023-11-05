import { Test, TestingModule } from "@nestjs/testing";

import { UrutanResolver } from "../../../../graphql/resolvers/urutan.resolver";
import { GraphqlService } from "../graphql.service";
import { UrutanController } from "./urutan.controller";
import { UrutanService } from "./urutan.service";

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

import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { LatinService } from "../../../domain/services/graphql/latin.service";
import { LatinController } from "../../controllers/graphql/latin.controller";

describe("LatinController", () => {
  let controller: LatinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LatinController],
      providers: [GraphqlService, LatinService],
    }).compile();

    controller = module.get<LatinController>(LatinController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

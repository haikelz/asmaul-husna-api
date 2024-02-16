import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlResolver } from "../../../domain/resolvers/graphql/graphql.resolver";
import { GraphqlService } from "../../../domain/services/graphql/graphql.service";
import { GraphqlController } from "../../controllers/graphql/graphql.controller";

describe("GraphqlController", () => {
  let controller: GraphqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GraphqlController],
      providers: [GraphqlService, GraphqlResolver],
    }).compile();

    controller = module.get<GraphqlController>(GraphqlController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from "@nestjs/testing";

import { AllService } from "../../services/graphql/all.service";
import { GraphqlService } from "../../services/graphql/graphql.service";

describe("AllService", () => {
  let service: AllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlService, AllService],
    }).compile();

    service = module.get<GraphqlService, AllService>(AllService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

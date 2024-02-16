import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlService } from "../../services/graphql/graphql.service";
import { LatinService } from "../../services/graphql/latin.service";

describe("LatinService", () => {
  let service: LatinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlService, LatinService],
    }).compile();

    service = module.get<GraphqlService, LatinService>(LatinService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

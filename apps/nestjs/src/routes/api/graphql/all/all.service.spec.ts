import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlService } from "../graphql.service";
import { AllService } from "./all.service";

describe("ApiService", () => {
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

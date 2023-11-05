import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlService } from "../graphql.service";
import { UrutanService } from "./urutan.service";

describe("UrutanService", () => {
  let service: UrutanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlService, UrutanService],
    }).compile();

    service = module.get<GraphqlService, UrutanService>(UrutanService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

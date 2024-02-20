import { Test, TestingModule } from "@nestjs/testing";

import { GraphqlModule } from "../../modules/graphql/graphql.module";

describe("GraphqlModule", () => {
  it("Should compile graphql module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

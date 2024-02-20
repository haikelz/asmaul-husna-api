import { Test, TestingModule } from "@nestjs/testing";

import { UrutanModule } from "../../modules/graphql/urutan.module";

describe("UrutanModule", () => {
  it("Should compile latin module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrutanModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

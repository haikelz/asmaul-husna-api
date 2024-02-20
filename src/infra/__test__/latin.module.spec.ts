import { Test, TestingModule } from "@nestjs/testing";

import { LatinModule } from "../modules/latin.module";

describe("LatinModule", () => {
  it("Should compile latin module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LatinModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

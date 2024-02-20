import { Test, TestingModule } from "@nestjs/testing";

import { HomeModule } from "../modules/home.module";

describe("HomeModule", () => {
  it("Should compile home module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

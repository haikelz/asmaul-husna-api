import { Test, TestingModule } from "@nestjs/testing";

import { UrutanModule } from "../modules/urutan.module";

describe("UrutanModule", () => {
  it("Should compile urutan module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrutanModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

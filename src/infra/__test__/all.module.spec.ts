import { Test, TestingModule } from "@nestjs/testing";

import { AllModule } from "../modules/all.module";

describe("AllModule", () => {
  it("Should compile all module", async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AllModule],
    }).compile();

    expect(module).toBeDefined();
  });
});

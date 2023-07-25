import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it("should return an object", () => {
      expect(appController.getHomeData()).toStrictEqual({
        author: "Haikel Ilham Hakim",
        repository: "https://github.com/haikelz/asmaul-husna-api",
        endpoints: {
          "/api/all": "Get all Asma'ul Husna",
          "/api/:urutan": "Get spesific Asma'ul Husna based on urutan",
          "/api/latin/:latin": "Get spesific Asma'ul Husna based on latin",
        },
      });
    });
  });
});

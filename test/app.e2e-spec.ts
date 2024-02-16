import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import supertest from "supertest";

import { AppModule } from "../src/app.module";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return supertest(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect({
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

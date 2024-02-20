import { Injectable } from "@nestjs/common";

import { GetHomeDataDto } from "../../app/dto/get-home-data.dto";

@Injectable()
export class HomeService {
  public getHomeData(): GetHomeDataDto {
    return {
      author: "Haikel Ilham Hakim",
      repository: "https://github.com/haikelz/asmaul-husna-api",
      endpoints: {
        "/api/all": "Get all Asma'ul Husna. Available queries: limit and page",
        "/api/:urutan": "Get spesific Asma'ul Husna based on urutan",
        "/api/latin/:latin": "Get spesific Asma'ul Husna based on latin",
      },
    };
  }
}

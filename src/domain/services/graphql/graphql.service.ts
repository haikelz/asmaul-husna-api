import { Injectable } from "@nestjs/common";

import { GraphqlGetHomeDto } from "../../../app/dto/graphql/graphql-get-home.dto";

@Injectable()
export class GraphqlService {
  public getHomeData(): GraphqlGetHomeDto {
    return {
      author: "Haikel Ilham Hakim",
      repository: "https://github.com/haikelz/asmaul-husna-api",
      endpoints: {
        "/api/graphql/all":
          "Get all Asma'ul Husna. Available queries: limit and page",
        "/api/graphql/:urutan": "Get spesific Asma'ul Husna based on urutan",
        "/api/graphql/latin/:latin":
          "Get spesific Asma'ul Husna based on latin",
      },
    };
  }
}

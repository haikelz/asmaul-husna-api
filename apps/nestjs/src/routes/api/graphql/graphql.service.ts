import { Injectable } from "@nestjs/common";

import { GraphqlGetHomeProps } from "../../../interfaces";

@Injectable()
export class GraphqlService {
  getHomeData(): GraphqlGetHomeProps {
    return {
      data: {
        author: "Haikel Ilham Hakim",
        repository: "https://github.com/haikelz/asmaul-husna-api",
        endpoints: {
          "/api/graphql/all": "Get all Asma'ul Husna",
          "/api/graphql/:urutan": "Get spesific Asma'ul Husna based on urutan",
          "/api/graphql/latin/:latin": "Get spesific Asma'ul Husna based on latin",
        },
      },
    };
  }
}

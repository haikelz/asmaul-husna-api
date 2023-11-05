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
          "/api/all": "Get all Asma'ul Husna",
          "/api/:urutan": "Get spesific Asma'ul Husna based on urutan",
          "/api/latin/:latin": "Get spesific Asma'ul Husna based on latin",
        },
      },
    };
  }
}
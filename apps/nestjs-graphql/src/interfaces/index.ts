import { HttpStatus } from "@nestjs/common";

export interface GetHomeDataProps {
  data: {
    author: string;
    repository: string;
    endpoints: {
      "/api/all": string;
      "/api/:urutan": string;
      "/api/latin/:latin": string;
    };
  };
}

export interface AsmaulHusnaProps {
  urutan: number;
  latin: string;
  arab: string;
  arti: string;
}

export interface BaseGetDataProps {
  statusCode: HttpStatus.OK;
  total: number;
}

export interface GetAllAsmaulHusnaProps {
  data: BaseGetDataProps & { data: AsmaulHusnaProps[] };
}

export interface GetDataBasedOnLatinProps {
  data: BaseGetDataProps & { data: AsmaulHusnaProps };
}

export interface GetDataBasedOnUrutanProps {
  data: BaseGetDataProps & { data: AsmaulHusnaProps };
}

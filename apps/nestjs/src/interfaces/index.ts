import { HttpStatus } from "@nestjs/common";

export interface GetHomeDataProps {
  author: string;
  repository: string;
  endpoints: {
    "/api/all": string;
    "/api/:urutan": string;
    "/api/latin/:latin": string;
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

export interface GetAllAsmaulHusnaProps extends BaseGetDataProps {
  data: AsmaulHusnaProps[];
}

export interface GetDataBasedOnLatinProps extends BaseGetDataProps {
  data: AsmaulHusnaProps;
}

export interface GetDataBasedOnUrutanProps extends BaseGetDataProps {
  data: AsmaulHusnaProps;
}

// interfaces for graphql
export interface GraphqlGetHomeProps {
  data: Omit<GetHomeDataProps, "endpoints"> & {
    endpoints: {
      "/api/graphql/all": string;
      "/api/graphql/:urutan": string;
      "/api/graphql/latin/:latin": string;
    };
  };
}

export interface GraphqlGetAllProps {
  data: GetAllAsmaulHusnaProps;
}

export interface GraphqlGetLatinProps {
  data: GetDataBasedOnLatinProps;
}

export interface GraphqlGetUrutanProps {
  data: GetDataBasedOnUrutanProps;
}

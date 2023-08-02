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
  statusCode: number;
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

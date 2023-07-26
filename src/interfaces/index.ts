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

export interface GetAllAsmaulHusnaProps {
  statusCode: number;
  total: number;
  data: AsmaulHusnaProps[];
}

export interface GetDataBasedOnLatinProps {
  statusCode: number;
  total: number;
  data: AsmaulHusnaProps;
}

export interface GetDataBasedOnUrutanProps {
  statusCode: number;
  total: number;
  data: AsmaulHusnaProps;
}

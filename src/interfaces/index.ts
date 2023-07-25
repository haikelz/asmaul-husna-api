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

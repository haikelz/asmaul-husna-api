<div align="center">
  <h1>asmaul-husna-api</h1>
  <p>asmaul-husna-api is an API to get the list of Asma'ul Husna</p>
</div>

## Endpoints

| Endpoint                    | Method | Description                                         |
| --------------------------- | ------ | --------------------------------------------------- |
| `/api/all`                  | GET    | Get all Asma'ul Husna                               |
| `/api/:urutan`              | GET    | Get spesific Asma'ul Husna based on urutan          |
| `/api/latin/:latin`         | GET    | Get spesific Asma'ul Husna based on latin           |
| `/api/graphql/all`          | POST   | GraphQL: get all Asma'ul Husna                      |
| `/api/graphql/:urutan`      | POST   | GraphQL: get spesific Asma'ul Husna based on urutan |
| `/api/graphql/latin/:latin` | POST   | GraphQL: get spesific Asma'ul Husna based on latin  |

## Response Example

**Get all Asma'ul Husna**

Request:

- Rest

```ts
fetch("https://asmaul-husna-api.vercel.app/api/all")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

- GraphQL

```graphql
query GetAllAsmaulHusna {
  statusCode
  total
  data
}
```

Response:

```json
{
  "statusCode": 200,
  "total": 99,
  "data": [
    {
      "urutan": 1,
      "latin": "Ar Rahman",
      "arab": "الرحمن",
      "arti": "Yang Maha Pengasih"
    },
    {
      "urutan": 2,
      "latin": "Ar Rahiim",
      "arab": "الرحيم",
      "arti": "Yang Maha Penyayang"
    },
    {
      "urutan": 3,
      "latin": "Al Malik",
      "arab": "الملك",
      "arti": "Yang Maha Merajai / Memerintah"
    },
    ....
  ]
}
```

**Get spesific Asma'ul Husna based on urutan**

Request:

- Rest

```ts
fetch("https://asmaul-husna-api.vercel.app/api/1")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

- GraphQL

```graphql
query GetDataBasedOnUrutan {
  statusCode
  total
  data
}
```

Response:

```json
{
  "statusCode": 200,
  "total": 1,
  "data": {
    "urutan": 1,
    "latin": "Ar Rahman",
    "arab": "الرحمن",
    "arti": "Yang Maha Pengasih"
  }
}
```

**Get spesific Asma'ul Husna based on latin**

Note: the latin can be lowercase or uppercase.

Request:

- Rest

```ts
fetch("https://asmaul-husna-api.vercel.app/api/latin/ar-rahman")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

- GraphQL

```graphql
query GetDataBasedOnLatin {
  statusCode
  total
  data
}
```

Response:

```json
{
  "statusCode": 200,
  "total": 1,
  "data": {
    "urutan": 1,
    "latin": "Ar Rahman",
    "arab": "الرحمن",
    "arti": "Yang Maha Pengasih"
  }
}
```

## Getting Started

- First, clone this repo.
- Install all needed depedencies with `pnpm install`.
- There are two version of this API: `golang`, and `nestjs`
- Make sure you've already installed Turbo globally. If not, then install it with `npm install -g turbo`.
- Decide one of the version that you want to test, and type `turbo run dev --filter <api-version>`, or `go run main.go` for golang version.
- For Nest JS version, if you want to see the Swagger Documentation of this API, change the endpoint to `/swagger`.

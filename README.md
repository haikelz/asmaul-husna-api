<img src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-support.svg" width="100%" />

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

**Note:** If you choose to use GraphQL instead of REST version, please use POST Method to get the data.

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

With limit(Rest or GraphQL)

```ts
// REST
fetch("https://asmaul-husna-api.vercel.app/api/all?limit=20")
  .then((res) => res.json())
  .then((result) => console.log(result));

// GraphQL
fetch("https://asmaul-husna-api.vercel.app/api/graphql/all?limit=20")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

Response:

```json
{
  "statusCode": 200,
  "total": 20,
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
- Type `pnpm run dev` and see the result in `http://localhost:5000`
- If you want to see the Swagger Documentation of this API, change the endpoint to `/swagger`.

## Credits

- [Muhammad Rivki](https://github.com/mikqi) for the original Asma'ul Husna json.

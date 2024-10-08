<img src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-support.svg" width="100%" />

<div align="center">
  <h1>asmaul-husna-api</h1>
  <p>asmaul-husna-api is an API to get the list of Asma'ul Husna</p>
</div>

## Endpoints

| Endpoint            | Method | Description                                |
| ------------------- | ------ | ------------------------------------------ |
| `/api/all`          | GET    | Get all Asma'ul Husna                      |
| `/api/:urutan`      | GET    | Get spesific Asma'ul Husna based on urutan |
| `/api/latin/:latin` | GET    | Get spesific Asma'ul Husna based on latin  |
| `/api/graphql`      | POST   | GraphQL: get all Asma'ul Husna             |

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
query {
  allAsmaulHusna {
    statusCode
    total
    data {
      urutan
      latin
      arab
      arti
    }
  }
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

With `page` and `limit`(Rest or GraphQL)

```ts
// REST
fetch("https://asmaul-husna-api.vercel.app/api/all?page=2&limit=20")
  .then((res) => res.json())
  .then((result) => console.log(result));
```

```graphql
query {
  allAsmaulHusna(page: 2, limit: 20) {
    statusCode
    total
    data {
      urutan
      latin
      arab
      arti
    }
  }
}
```

**Note:** The `page` and `limit` query are optional. But if you want to use the `page` query, you must use the `limit` query as well.

Response:

```json
{
  "statusCode": 200,
  "total": 20,
  "data": [
    {
      "urutan": 21,
      "latin": "Al Baasith",
      "arab": "الباسط",
      "arti": "Yang Maha Melapangkan(makhluknya)"
    },
    {
      "urutan": 22,
      "latin": "Al Khaafidh",
      "arab": "الخافض",
      "arti": "Yang Maha Merendahkan(makhluknya)"
    },
    {
      "urutan": 23,
      "latin": "Ar Raafi '",
      "arab": "الرافع",
      "arti": "Yang Maha Meninggikan(makhluknya)"
    },
    ...
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
query {
  asmaulHusnaByUrutan(urutan: 1) {
    statusCode
    total
    data {
      urutan
      latin
      arab
      arti
    }
  }
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
query {
  asmaulHusnaByLatin(latin: "Ar Rahman") {
    statusCode
    total
    data {
      urutan
      latin
      arab
      arti
    }
  }
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
- Because this project are integrated with Vercel, so make sure that you've already installed `@vercel/cli` and connect your project with Vercel.
- Type `pnpm run start` and see the result in `http://localhost:5000`.

## Credits

- [Muhammad Rivki](https://github.com/mikqi) for the original Asma'ul Husna json.

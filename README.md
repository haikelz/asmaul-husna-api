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

## Response Example

**Get all Asma'ul Husna**

Request:

```ts
fetch("https://asmaul-husna-api.vercel.app/api/all")
  .then((res) => res.json())
  .then((result) => console.log(result));
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

With `page` and `limit`

```ts
// REST
fetch("https://asmaul-husna-api.vercel.app/api/all?page=2&limit=20")
  .then((res) => res.json())
  .then((result) => console.log(result));
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

```ts
fetch("https://asmaul-husna-api.vercel.app/api/1")
  .then((res) => res.json())
  .then((result) => console.log(result));
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

```ts
fetch("https://asmaul-husna-api.vercel.app/api/latin/ar-rahman")
  .then((res) => res.json())
  .then((result) => console.log(result));
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

## Tech Stack

- Go
- Fiber
- bytedance/sonic
- Swagger for API Documentation
- Prometheus and Grafana for API monitoring

## Getting Started

- First, clone this repo.
- Make sure that you've already installed `air` for live reloading. Type `air` to run the project locally. If you are a Windows user, you must change some configurations in `air.toml` file, more spesific in `cmd` and `bin` parts.

## Credits

- [Muhammad Rivki](https://github.com/mikqi) for the original Asma'ul Husna json.

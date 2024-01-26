<img src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-support.svg" width="100%" />

<div align="center">
  <h1>asmaul-husna-api</h1>
  <p>asmaul-husna-api is an API to get the list of Asma'ul Husna</p>
</div>

## Note

This branch is for Golang version.

## Endpoints

| Endpoint            | Method | Description                                |
| ------------------- | ------ | ------------------------------------------ |
| `/api/all`          | GET    | Get all Asma'ul Husna                      |
| `/api/:urutan`      | GET    | Get spesific Asma'ul Husna based on urutan |
| `/api/latin/:latin` | GET    | Get spesific Asma'ul Husna based on latin  |

## Getting Started

- First, clone this repo.
- Sync go modules with `go mod tidy`.
- Type `go run main.go` and see the result in `http://localhost:5000`.

## Credits

- [Muhammad Rivki](https://github.com/mikqi) for the original Asma'ul Husna json.

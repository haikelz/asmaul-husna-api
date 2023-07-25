<div align="center">
  <h1>asmaul-husna-api</h1>
  <p>asmaul-husna-api is an API to get the list of Asma'ul Husna</p>
</div>

## Endpoints

| Endpoint        | Description                                |
| --------------- | ------------------------------------------ |
| `/`             | Get all Asma'ul Husna                      |
| `/:urutan`      | Get spesific Asma'ul Husna based on urutan |
| `/latin/:latin` | Get spesific Asma'ul Husna based on latin  |

## Stack

- Nest JS
- Typescript

## Getting Started

- First, clone this repo.
- Install all needed depedencies with `pnpm install`.
- After that, you can start the project with `pnpm run start:dev` and see the result.
- Default port is 5000. You can change and edit the port in `src/main.ts` file.

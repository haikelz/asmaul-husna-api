FROM node:alpine AS build

RUN npm i -g pnpm turbo @nestjs/cli

WORKDIR /app
ENV PNPM="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
COPY apps/nestjs/package.json ./apps/nestjs/package.json
COPY packages/tsconfig/package.json ./packages/tsconfig/package.json

RUN pnpm install

COPY . ./

RUN turbo run build
COPY apps/nestjs/dist ./apps/nestjs/dist

CMD ["turbo", "run", "dev"]

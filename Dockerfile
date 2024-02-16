FROM node:alpine AS build

RUN npm i -g pnpm @nestjs/cli

WORKDIR /app
ENV PNPM="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./
RUN pnpm run build

CMD ["pnpm", "run", "dev"]
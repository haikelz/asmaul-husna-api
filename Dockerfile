FROM node:alpine AS build

RUN npm install -g pnpm vercel@latest
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . ./

CMD ["pnpm", "run", "start"]

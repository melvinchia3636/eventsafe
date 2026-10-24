# syntax = docker/dockerfile:1

ARG BUN_VERSION=1.4.3
FROM oven/bun:${BUN_VERSION}-slim AS build

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN bun install

# Build the Nest application
COPY nest-cli.json tsconfig.json tsconfig.build.json ./
COPY src ./src
RUN bun run build

# Final stage for the app image
FROM oven/bun:${BUN_VERSION}-slim

ENV NODE_ENV="production"

WORKDIR /app

COPY package.json ./
RUN bun install --production

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["bun", "dist/main.js"]

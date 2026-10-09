# syntax=docker/dockerfile:1

# ---------- Build stage ----------
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
# Build the TanStack Start app as a standalone Node.js server (Nitro node-server preset)
ENV NITRO_PRESET=node-server
RUN bun run build

# ---------- Runtime stage ----------
FROM node:22-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

# Nitro output is self-contained (server bundle + public assets)
COPY --from=build --chown=node:node /app/.output ./.output

USER node
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]

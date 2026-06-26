# Stage 1: Install dependencies
FROM node:24-slim AS deps
RUN npm install -g pnpm@11
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Stage 2: Build
FROM node:24-slim AS builder
RUN npm install -g pnpm@11
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Stage 3: Production
FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]

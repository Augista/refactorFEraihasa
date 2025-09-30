# ========== Builder ==========
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm via corepack (lebih aman daripada npm i -g pnpm)
RUN corepack enable

# Copy manifest files only
COPY package.json pnpm-lock.yaml ./

# Install deps (include devDependencies for build)
RUN pnpm install --force --ignore-scripts

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm build --no-lint
# ========== Runner ==========
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BACKEND_API_URL=http://api.raihasa.id

# Install runtime deps (sharp/vips for next/image)
RUN apk add --no-cache libc6-compat vips-dev

# Copy only production files
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production deps
RUN corepack enable && pnpm install --prod --force --ignore-scripts


EXPOSE 3000
CMD ["pnpm", "start"]

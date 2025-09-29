# ========== Builder ==========
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

# Copy manifest files
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source files explicitly
COPY . .

# Ensure public/images is included
COPY public ./public

# Build Next.js app
RUN pnpm build

# ========== Runner ==========
FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_BACKEND_API_URL=http://api.raihasa.id

# Install sharp dependencies for Next.js image optimization (optional)
RUN apk add --no-cache libc6-compat vips-dev

# Copy only what is needed from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
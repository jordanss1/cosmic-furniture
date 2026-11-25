
# ============================================
# Development Dockerfile - Next.js
# ============================================

ARG NODE_VERSION=24.13.0-slim

FROM node:${NODE_VERSION}

# Set working directory
WORKDIR /app

# Development environment
ENV NODE_ENV=development
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Copy dependency manifests first for better build caching
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* pnpm-workspace.yaml* .npmrc* ./

# Install dependencies, including development dependencies
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    if [ -f package-lock.json ]; then \
      npm ci --no-audit --no-fund; \
    elif [ -f yarn.lock ]; then \
      corepack enable yarn && yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then \
      corepack enable pnpm && pnpm install --frozen-lockfile; \
    else \
      echo "No lockfile found." && exit 1; \
    fi

# Copy application source
COPY . .

# Expose Next.js development port
EXPOSE 3000

# Start Next.js development server with Turbopack
CMD ["npm", "run", "dev", "--", "--hostname", "0.0.0.0"]

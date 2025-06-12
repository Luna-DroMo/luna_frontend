FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# ---------- Build Stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Copy installed node_modules from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the project files
COPY . .

# Build the Next.js application
RUN npm run build

# ---------- Production Stage ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy only the necessary output and files to run the server
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "start"] 
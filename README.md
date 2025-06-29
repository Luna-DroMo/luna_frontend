This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

- **Node.js** ≥ 18 (tested with 20.x).  
  You can install via [nodejs.org](https://nodejs.org/) or a version manager like `nvm` / `asdf`.
- **npm** (comes with Node) – or `yarn` / `pnpm` if you prefer.

## Local Development

1. **Clone & install dependencies**
   ```bash
   git clone <repo-url>
   cd luna_frontend
   npm ci   # or: npm install
   ```
2. **Create an environment file** (skip if you do not need runtime variables)
   ```bash
   # .env.local – ignored by git
   NEXT_PUBLIC_API_URL=http://localhost:80  # your backend base URL
   ```
   • The `NEXT_PUBLIC_` prefix is mandatory for variables that the browser must see.  
   • Anything after an un-quoted `#` is treated as a comment.
3. **Start the dev server**
   ```bash
   npm run dev
   ```
   Open <http://localhost:3000> to view the app; it reloads on file save.

### Production-like local run

```bash
npm run build     # compile for production
npm run start     # start Next.js in production mode
```

## Running with Docker

The repository contains two Dockerfiles for different use cases:

### Dockerfile vs dev.Dockerfile

**`Dockerfile` (Production)**

- **Multi-stage build** for optimized production images
- **Smaller final image** - only includes built assets and runtime dependencies
- **Better security** - runs with minimal attack surface
- **Build process**: dependencies → build → production runtime
- **Use for**: production deployments, CI/CD pipelines

**`dev.Dockerfile` (Development)**

- **Single-stage build** for faster iteration
- **Includes all source code** and development dependencies
- **Hot reloading** with `npm run dev`
- **Larger image size** but faster rebuild times
- **Use for**: local development, debugging

### 1. Production Build (Dockerfile)

```bash
# The -t flag tags the image so it's easier to reference later.
# Feel free to change "luna-frontend" to whatever name you like.

docker build -t luna-frontend .
```

### 2. Development Build (dev.Dockerfile)

```bash
# Build development image for faster iteration
docker build -f dev.Dockerfile -t luna-dev .
```

### 3. Run the container

**Production:**

```bash
# Map container port 3000 -> host port 3000 so you can access the app in your browser.
docker run --rm -p 3000:3000 luna-frontend
```

**Development:**

```bash
# Development with hot reloading
docker run --rm -p 3000:3000 -v $(pwd):/app luna-dev
```

Now visit **http://localhost:3000** in your browser.

### Customising

- Want a different Node.js version? Change the `FROM node:20-alpine` lines.
- Need environment variables (e.g. API URLs)? There are two options:

1. **Bake them into the image** – include a `.env` file before you `docker build` (the Dockerfile copies it). You'll need to rebuild any time a value changes.
2. **Inject them at runtime** – pass `-e` flags or `--env-file` when you run the container, so you can reuse the same image across environments.

Runtime example:

```bash
docker run \
  -e NEXT_PUBLIC_API_URL=https://api.example.com \
  -e JWT_SECRET=super-secret \
  -p 3000:3000 luna-frontend
```

For local development you can still use `npm run dev` outside Docker – the container is geared toward production.

# Docker setup for this microservices project

This repository contains 4 Node.js microservices: `auth`, `product`, `order` and an `api-gateway`.

What I added:

- `api-gateway/Dockerfile` — Dockerfile for API Gateway (port 3003)
- `auth/Dockerfile` — Dockerfile for Auth service (port 3000)
- `product/Dockerfile` — Dockerfile for Product service (port 3001)
- `order/Dockerfile` — Dockerfile for Order service (port 3002)
- `docker-compose.yml` — compose file to build and run all services, plus MongoDB and RabbitMQ
- `.dockerignore` — avoid copying node_modules and secrets into images

Quick start (macOS / zsh):

1. Build and start everything in background:

```bash
docker compose up -d --build
```

2. Check logs:

```bash
docker compose logs -f api-gateway auth product order
```

3. Stop and remove containers:

```bash
docker compose down
```

Notes and recommended env vars:

- Each service reads `process.env.PORT` (defaults in code if not set). The compose file sets ports to match current app proxies:
  - auth: 3000, product: 3001, order: 3002, api-gateway: 3003
- Mongo and RabbitMQ in compose are reachable by service name: `mongo` and `rabbitmq`.
- Set `JWT_SECRET` and database URLs appropriately for production (do not keep secrets in the repo!). You can override settings by creating a `.env` in repo root or by editing the `environment:` section in `docker-compose.yml`.

Troubleshooting:

- If a service fails to start, run `docker compose logs <service>` to see the error.
- If a service needs dev dependencies for tests, you can remove `--production` from the Dockerfile `npm install` step locally to include devDependencies.

If you want, tôi có thể:

- Thêm healthchecks và restart policies.
- Thêm multi-stage builds to reduce image size.
- Tinh chỉnh environment variables và secret management (Docker secrets or .env handling).

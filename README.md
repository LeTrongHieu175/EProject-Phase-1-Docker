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

Test Image:
<img width="1507" height="981" alt="image" src="https://github.com/user-attachments/assets/8b27dd9d-f3f1-4f38-a69b-83d42e8d6cc9" />

<img width="7511" height="978" alt="image" src="https://github.com/user-attachments/assets/2de3c2a9-fd58-42eb-b7b4-714c4e7d2c07" />

<img width="1511" height="978" alt="image" src="https://github.com/user-attachments/assets/5290e463-d676-4a59-9487-77f40f161fbe" />

<img width="1511" height="979" alt="image" src="https://github.com/user-attachments/assets/2269ac69-4840-4623-b962-bcf24714e7d0" />

<img width="1506" height="969" alt="image" src="https://github.com/user-attachments/assets/231fa8d2-83ce-4ae8-bb37-4e54fbef1e7e" />

<img width="1508" height="979" alt="image" src="https://github.com/user-attachments/assets/7c4179c2-e172-4485-9151-68ef4cea562e" />





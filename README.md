# CSP-451-Checkpoint8-RozanChapagain
# UrbanEats Docker Project

## Overview
This project is a containerized microservices application using Docker Compose. It includes a web application, backend API, PostgreSQL database, Redis cache, RabbitMQ message queue, and an Nginx reverse proxy.

The system demonstrates container orchestration, service communication, and performance optimization using multi-stage Docker builds.

---

## Architecture
The application consists of the following services:

- web: frontend application
- api: backend service handling requests
- db: PostgreSQL database
- cache: Redis for caching
- queue: RabbitMQ for messaging
- proxy: Nginx reverse proxy

Nginx routes:
- `/` → web service
- `/api/` → api service

---

## How to Run

1. Clone the repository

2. Navigate to the project folder

3. Run the following command:

---

## Access the Application

Web Application:
http://localhost

API:
http://localhost/api/

Health Check:
http://localhost/api/health

RabbitMQ Management UI:
http://localhost:15672

Login:
- Username: admin
- Password: admin123

---

## Environment Variables

Environment variables are stored in a `.env` file.

Example file:

The `.env.example` file is included in the repository as a template.

---

## Docker Features Used

- Docker Compose for multi-container orchestration
- Custom bridge network (urbaneats-net)
- Multi-stage builds for smaller image size
- Non-root containers for security
- Health checks for service monitoring

---

## Reverse Proxy

Nginx is used as a reverse proxy:

- Routes frontend traffic to web service
- Routes `/api` requests to API service
- Improves separation between services

---

## Security

- Containers run as non-root users
- Sensitive data stored in `.env` file
- `.dockerignore` prevents secrets and unnecessary files from being included

---

## Performance Optimization

- Multi-stage Docker builds reduce final image size
- Layer caching used to speed up builds
- Dependencies installed before copying source code to improve cache reuse

---

## How to Stop

---

## Notes

- All services communicate using Docker network
- Services are reachable using service names (api, db, cache, etc.)
- Application is designed for local development and demonstration

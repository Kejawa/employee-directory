
---

# Troubleshooting

````markdown

## CORS Error

Cause

Frontend communicating directly with backend.

Solution

Use Nginx reverse proxy.


## PostgreSQL Connection Failed

Cause

Incorrect database credentials.

Solution

Verify .env configuration.


## Container Cannot Reach Database

Cause

Containers not on the same Docker network.

Solution

Attach containers to employee-network.

---

## Reverse Proxy 502

Cause

Backend container unavailable.

Solution

Verify backend container is running.


## Database Data Lost

Cause

Database started without a Docker volume.

Solution

Create and mount a persistent Docker volume.
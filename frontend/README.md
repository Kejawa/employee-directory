# Frontend
Simple HTML, CSS, and JavaScript frontend for the Employee Directory application.

## Features
- Display employees
- Add employee
- Delete employee

The frontend communicates with the backend through the Nginx reverse proxy.

## Run Locally

Simply open `index.html` in your browser, or use Docker (recommended, since API calls rely on the reverse proxy).

## Docker

Build the image:

```bash
docker build -t employee-frontend .
```

Run the container:

```bash
docker run -d -p 8080:80 --name frontend employee-frontend
```

Then visit:

```
http://localhost:8080
```

## Notes
- This service is designed to run behind the Nginx reverse proxy (`proxy` service) alongside the backend and database, defined in the project's root `docker-compose.yml`.
- API requests should be made to `/api/...` — the reverse proxy forwards these to the backend automatically.
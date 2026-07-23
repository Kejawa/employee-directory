# GitHub Actions

This directory contains the CI workflows for the Employee Directory application.

## Workflows

### ci.yml
Performs Continuous Integration by:

- Checking out the repository
- Installing dependencies
- Running lint checks
- Running tests
- Building Docker images

---

### security.yml

Runs a Trivy vulnerability scan against the backend Docker image.

The workflow reports HIGH and CRITICAL vulnerabilities before deployment.

---

### docker.yml

Publishes Docker images to Docker Hub.

Images are tagged using:

- latest
- Git commit SHA

After a successful image push, Jenkins is triggered to deploy the latest version.

---

## Secrets Required

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

---

## Pipeline Flow

Developer Push

↓

CI

↓

Security Scan

↓

Build Docker Images

↓

Push Docker Images

↓

Trigger Jenkins
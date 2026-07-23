# Jenkins Deployment Pipeline

This directory contains the Continuous Deployment (CD) configuration.

## Files

### Jenkinsfile

Defines the deployment pipeline.

Pipeline stages:

- Checkout Repository
- Verify Docker Installation
- Login to Docker Hub
- Pull Latest Images
- Stop Existing Containers
- Deploy New Containers
- Verify Running Containers

---

## Jenkins Plugins

Required plugins:

- Pipeline
- Git
- Docker Pipeline
- GitHub
- Generic Webhook Trigger
- Credentials Binding

---

## Jenkins Credentials

Create the following credentials:

- dockerhub-credentials

---

## Deployment Flow

GitHub Actions

↓

Docker Hub

↓

Jenkins Webhook

↓

docker compose pull

↓

docker compose up -d

↓

Application Running
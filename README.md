# DevOps Project 2 — Dockerized Node.js App with CI/CD

## Overview
This project demonstrates a complete DevOps workflow by deploying a containerized Node.js application using Docker, Nginx, and GitHub Actions for continuous deployment.


## Tech Stack
- Node.js (Express)
- Docker & Docker Compose
- Nginx (Reverse Proxy)
- GitHub Actions (CI/CD)
- AWS EC2 (Deployment Server)



## Features
- Containerized Node.js application
- Multi-container setup using Docker Compose
- Nginx reverse proxy for routing traffic
- Automated deployment pipeline using GitHub Actions
- Live deployment on AWS EC2


## How It Works

1. Code is pushed to the main branch  
2. GitHub Actions workflow is triggered  
3. Workflow connects to EC2 via SSH  
4. Latest code is pulled from GitHub  
5. Docker containers are rebuilt and restarted  
6. Updated application is deployed automatically  


## Live Application
The application is deployed on an AWS EC2 instance and accessible via the server's public IP.



# Flow-Tick: A Microservices-Based Task Management System  

<p align="center">
  <img src="https://img.shields.io/badge/node.js-18-green.svg" alt="Node.js">
  <img src="https://img.shields.io/badge/express-5.1.0-blue.svg" alt="Express">
  <img src="https://img.shields.io/badge/mongodb-latest-green.svg" alt="MongoDB">
  <img src="https://img.shields.io/badge/rabbitmq-3--management-orange.svg" alt="RabbitMQ">
  <img src="https://img.shields.io/badge/docker-enabled-blue.svg" alt="Docker">
</p>

---

**Flow-Tick** is a scalable and decoupled **microservices-based task management system**.  
It manages **users, tasks, and notifications** with independent services communicating via **RabbitMQ**.  
Each service is containerized with **Docker**, ensuring ease of deployment and scalability.

---

## 🏛️ Architecture Overview  

The system is composed of **three core services**:  

- **👤 User Service** → Manages user registration and retrieval.  
- **📝 Task Service** → Handles task creation & retrieval, and publishes task events to RabbitMQ.  
- **🔔 Notification Service** → Listens for task events and simulates notifications.  

<p align="center">
  <img src="https://i.ibb.co/rvwY9Sh/microservices-architecture.png" alt="Architecture Diagram" width="600">
</p>

---

## 🚀 Services  

<details>
<summary><strong>👤 User Service</strong></summary>

- **Description**: Manages user-related operations.  
- **Port**: `3000`  
- **Endpoints**:  
  - `POST /users` → Register a new user.  
  - `GET /users` → Get all users.  
- **Database Collection**: `users`  
- **Technologies**: Node.js, Express, Mongoose  

</details>

<details>
<summary><strong>📝 Task Service</strong></summary>

- **Description**: Handles task logic and publishes events to `taskQueue`.  
- **Port**: `3001`  
- **Endpoints**:  
  - `POST /tasks` → Create a task & publish event.  
  - `GET /tasks` → Retrieve all tasks.  
  - `GET /tasks/user/:userId` → Get tasks by user ID.  
- **Database Collection**: `tasks`  
- **Technologies**: Node.js, Express, Mongoose, AMQPLib  

</details>

<details>
<summary><strong>🔔 Notification Service</strong></summary>

- **Description**: Consumes messages from `taskQueue` and logs notifications.  
- **Port**: `3002`  
- **Functionality**: Simulates notifications for newly created tasks.  
- **Technologies**: Node.js, AMQPLib  

</details>

---

## 🛠️ Tech Stack  

- **Backend** → Node.js + Express.js  
- **Database** → MongoDB  
- **Message Broker** → RabbitMQ  
- **ORM** → Mongoose  
- **Containerization** → Docker & Docker Compose  

---

## 🏁 Getting Started  

The entire system runs inside Docker containers.  

### 1️⃣ Clone the Repository  

```bash
git clone <repository-url>
cd <repository-folder>

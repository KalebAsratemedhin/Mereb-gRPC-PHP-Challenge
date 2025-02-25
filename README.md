# Mereb gRPC PHP Challenge

## Overview
This project is a gRPC-based client-server application built using **PHP (Spiral gRPC)** for the backend and **React** for the frontend. The PHP gRPC server communicates with the frontend via **Envoy Proxy**.

The application demonstrates a simple **Ping Service**, where a client sends a message to the server, and the server echoes back the same message.

---

## 🛠 Technologies Used
### **Backend (PHP gRPC Server)**
- PHP 8.1
- Spiral PHP gRPC (`spiral/php-grpc`)
- RoadRunner (`rr-grpc`)
- Envoy Proxy (for communication)
- PHPUnit (for testing)

### **Frontend (React gRPC Client)**
- React (Vite-powered)
- `@grpc/grpc-web` (gRPC client for React)
- React Testing Library + Jest (for unit tests)

---

## Project Structure
```
Mereb-gRPC-PHP-Challenge/
├── backend/                  # PHP gRPC server
│   ├── src/                  # Source code
│   ├── tests/                # PHPUnit tests
│   ├── proto/                # gRPC .proto files
│   ├── vendor/               # Composer dependencies
│   ├── composer.json         # PHP dependencies
│   ├── phpunit.xml.dist      # PHPUnit configuration
│   ├── server.php            # gRPC Server
│   └── Dockerfile            # Docker setup
│
├── frontend/                 # React gRPC client
│   ├── src/
│   ├── __tests__/            # Jest & RTL tests
│   ├── package.json          # Frontend dependencies
│   ├── vite.config.js        # Vite configuration
│   ├── grpc-client.js        # gRPC client
│   └── Dockerfile            # Docker setup
│
├── envoy.yaml                # Envoy Proxy config
├── docker-compose.yml        # Docker Compose setup
└── README.md                 # Project Documentation
```

---

## Setup Instructions
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/KalebAsratemedhin/Mereb-gRPC-PHP-Challenge.git
cd Mereb-gRPC-PHP-Challenge
```

### **2️⃣ Setup Backend (PHP gRPC Server)**
```sh
cd backend
composer install
```

### **3️⃣ Setup Frontend (React gRPC Client)**
```sh
cd ../frontend
npm install
```

---

## Running the Application
### **Option 1: Running with Docker**
```sh
docker-compose up --build
```
- The PHP gRPC server will run on `localhost:9001`
- The frontend React app will be available on `http://localhost:5173`
- Envoy proxy will be running on `localhost:8000`

### **Option 2: Running Manually**
#### **Start the PHP gRPC Server**
```sh
cd backend
rr-grpc serve -v -d
```
#### **Start the Frontend React App**
```sh
cd frontend
npm run dev
```

---

## Running Tests
### **Backend (PHP gRPC Tests - PHPUnit)**
```sh
cd backend
vendor/bin/phpunit
```

### **Frontend (React Tests - Jest + RTL)**
```sh
cd frontend
npm test
```

---

## API Endpoints
- **gRPC Ping Service**
  - **Method:** `ping`
  - **Request:** `{ message: "Hello" }`
  - **Response:** `{ message: "Hello" }`

---



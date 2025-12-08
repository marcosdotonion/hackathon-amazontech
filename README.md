📦 Hackathon AmazonTech — Backend API

Backend API for the Hackathon AmazonTech project.
This service provides authentication, waste lot management, scheduling, reporting, and AI-driven insights.

Built with Node.js, Express and TypeScript using a clean layered architecture.

🚀 Tech Stack

Node.js

Express

TypeScript

Swagger (OpenAPI)

Firebase (Auth + Storage) (planned)

AI integrations (planned)

📁 Project Structure
src/
  app.ts                # Express configuration
  server.ts             # Server startup
  hackaton-swagger.yaml # API documentation

  controllers/          # Request/response logic
  services/             # Business logic
  repositories/         # Database access
  routes/               # HTTP endpoints
  middlewares/          # Auth, errors, upload
  models/               # Entities
  types/                # Type definitions
  utils/                # Helpers
  docs/                 # Documentation files

▶️ How to run the project
1. Install dependencies
npm install

2. Run development server
npm run dev

3. Open Swagger UI (API documentation)

Once running, open:

http://localhost:3000/api-docs

✅ Current Features

Project architecture ready

Swagger documentation loaded

Express configured

Authentication structure created

Base routes defined

Middleware structure prepared

Repository pattern applied

📌 Roadmap

Planned features:

✅ Authentication

✅ Lot creation

✅ Image upload

✅ Scheduling

✅ Reports

✅ AI integration

✅ Firebase integration

✅ Role management

✅ API security

✍️ Development guidelines
Architecture Layers
Route → Controller → Service → Repository → Database

Rules

Swagger is the source of truth

Controllers do not contain business logic

Services do not respond to HTTP directly

Repositories only access database logic

Every new feature must have Swagger documentation

🧪 Testing

Swagger UI is used for manual API testing until automated tests are added.

🤝 Contribution

Fork the repository

Create your feature branch

Commit with clear messages

Push and open a Pull Request

🧠 Philosophy

This project aims to:

Be simple

Be reliable

Be readable

Be scalable

Clarity over cleverness.

📜 License

MIT License

👤 Author

Marcos Dotonion
GitHub: https://github.com/marcosdotonion

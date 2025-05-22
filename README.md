# Prisca Portfolio

This is a monorepository project built with Nx, featuring a NestJS backend with PostgreSQL and Prisma, and an Angular frontend.

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- npm or yarn

## Project Structure

```
prisca-portfolio/
├── apps/
│   ├── backend/     # NestJS backend
│   └── frontend/    # Angular frontend
└── package.json
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   - Create a PostgreSQL database named `prisca_portfolio`
   - Update the `.env` file in the backend directory with your database credentials

4. Generate Prisma client:
   ```bash
   cd apps/backend
   npx prisma generate
   ```

## Running the Application

1. Start the backend:
   ```bash
   cd apps/backend
   npm run start:dev
   ```

2. Start the frontend:
   ```bash
   cd apps/frontend
   npm start
   ```

The backend will be available at `http://localhost:3000` and the frontend at `http://localhost:4200`.

## Features

- User management with CRUD operations
- PostgreSQL database with Prisma ORM
- Modern Angular frontend with responsive design
- RESTful API with NestJS
- CORS enabled for local development

## Development

- Backend API endpoints are available at `http://localhost:3000/api`
- Frontend development server with hot reload at `http://localhost:4200`
- Prisma Studio for database management: `npx prisma studio` 
# Samvidhan Sarathi

Samvidhan Sarathi is a gamified civic‑tech learning platform that helps citizens understand the Indian Constitution in a simple, engaging, and citizen‑first way.

## Highlights

- Gamified lessons, quizzes, and scenarios
- Progress tracking, badges, and dashboard
- Clean, modern UI with dark theme
- Designed for students and citizens

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Auth:** JWT, bcrypt

## Quick Start

**Prerequisites:** Node.js (v14+), MongoDB

1. Install dependencies

```
cd server
npm install
cd ../client
npm install
```

2. Configure environment

- Create `.env` files in `server` and `client` (use `.env.example` if present)

3. Seed the database

```
cd server
node seed-database.js
```

4. Run the app

```
cd ..
npm run dev
```

## Scripts (root)

- `npm run dev` – start client + server
- `npm run server` – backend only
- `npm run client` – frontend only

## Project Structure

- `client/` React frontend
- `server/` Express API + MongoDB models

## Academic Use (Final Year Project)

This project demonstrates a full‑stack MERN application with authentication, content delivery, gamification, and progress tracking for civic education.

## License

ISC# Constitutional Learning Platform

An interactive, gamified web application for learning constitutional laws in a fun and engaging way.

## Features

- **Authentication**: Secure user login/signup system
- **Dashboard**: Track progress and achievements
- **Learning Modules**: Gamified learning activities and quizzes
- **Country Selector**: Learn about constitutions from different countries
- **Interactive UI**: Dark theme with animations and responsive design

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:

   ```
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Setup environment variables:
   Create `.env` files in both client and server directories based on the provided examples.

4. Run the development servers:

   ```
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm start
   ```

## Project Structure

# Seed Your Database

Run the database seeding script:

cd server
node seed-database.js

This will populate your MongoDB with:

Constitutional topics
Content related to those topics
Initial game data

# Verify the seeding worked by checking if data was created:

node check-topics.js

# then run : npm run dev

Then start your app normally:

- `/client` - React frontend application
- `/server` - Node.js/Express backend API

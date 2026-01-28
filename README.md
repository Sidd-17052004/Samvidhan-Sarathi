# 📜 Samvidhan Sarathi

> **Learn the Constitution. Master Citizenship. Have Fun Doing It.**

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?logo=node.js)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-13AA52?logo=mongodb)](https://mongodb.com)
[![License](https://img.shields.io/badge/License-ISC-blue)](#license)

---

## 🎯 What is Samvidhan Sarathi?

Samvidhan Sarathi is a **gamified civic-tech learning platform** that transforms constitutional education into an engaging, interactive experience. Designed for citizens and students across India, it makes understanding the Constitution simple, fun, and empowering.

### ⭐ Key Highlights

- 🎮 **Gamified Learning**: Quizzes, scenario-based challenges, timeline games, and spiral learning paths
- 🏆 **Achievement System**: Earn badges, track progress, and compete on leaderboards
- 📊 **Personalized Dashboard**: Monitor learning journey with detailed analytics
- 🌙 **Beautiful UI**: Modern dark-themed design with smooth animations
- 🔐 **Secure Authentication**: JWT-based user authentication with bcrypt encryption
- 📱 **Fully Responsive**: Seamless experience on desktop, tablet, and mobile

---

## 💻 Tech Stack

### Frontend

- **React 18+** - Modern UI framework
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations & interactions

### Backend

- **Node.js + Express** - Fast, scalable server
- **MongoDB** - NoSQL database for flexible data modeling
- **JWT + bcrypt** - Enterprise-grade authentication

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v14 or later
- **MongoDB** (local or Atlas)

### Installation

1. **Install dependencies**

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

2. **Configure environment variables**

   ```bash
   # Create .env files in both server/ and client/ directories
   # Reference .env.example if available
   ```

3. **Seed the database**

   ```bash
   cd server
   node seed-database.js
   node check-topics.js  # Verify data creation
   ```

4. **Run the application**
   ```bash
   npm run dev        # Start both client & server
   ```

### 📋 Available Scripts

| Command          | Purpose                               |
| ---------------- | ------------------------------------- |
| `npm run dev`    | Start frontend + backend concurrently |
| `npm run server` | Run backend only                      |
| `npm run client` | Run frontend only                     |

---

## 📁 Project Structure

```
Samvidhan_Sarthi/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React context for state management
│   │   └── App.js          # Main app component
│   └── public/             # Static assets
│
└── server/                 # Node.js/Express backend
    ├── routes/             # API endpoints
    ├── models/             # MongoDB schemas
    ├── index.js            # Server entry point
    └── seed-database.js    # Database initialization script
```

---

## 🎓 Academic Excellence

**Final Year Engineering Project** demonstrating:

- ✅ Full-stack MERN architecture
- ✅ User authentication & authorization
- ✅ RESTful API design
- ✅ Database optimization & seeding
- ✅ Responsive UI/UX design
- ✅ Gamification mechanics
- ✅ Progress tracking & analytics

---

## 🌟 Features in Detail

### 📚 Learning Modules

- Interactive constitutional lessons with gamification
- Multiple game types: Quizzes, Scenarios, Timelines, Spirals
- Progressive difficulty levels

### 👤 User Authentication

- Secure signup & login system
- JWT token-based sessions
- Password hashing with bcrypt

### 🎖️ Achievement & Progress Tracking

- Earn badges for milestones
- Real-time progress dashboard
- Performance analytics & insights

### 🎨 UI/UX Excellence

- Dark theme for comfortable learning
- Smooth animations & transitions
- Mobile-first responsive design

---

## 📦 Dependencies

**Core Libraries**: React, Express, MongoDB
**Styling**: Tailwind CSS, Framer Motion
**Security**: JWT, bcrypt
**Environment**: dotenv for configuration

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests with improvements.

---

## 📄 License

ISC License - See LICENSE file for details

---

## 📞 Contact & Support

For questions or support, please open an issue on the repository.

---

**Made with ❤️ to empower Indian citizens through constitutional literacy**

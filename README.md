# User Management Application

## 📋 Overview

This is a full-featured User Management Application built with React, Vite, and Tailwind CSS. The application provides a complete authentication flow including registration, login, profile management, and secure routing.

## ✨ Features

- User Registration
- User Authentication
- Protected Routes
- Responsive Design
- Mobile-Friendly Navigation
- JWT Token-Based Authentication
- Logout Functionality
- Profile Page

## 🚀 Technologies Used

- React.js
- Vite
- React Router
- Axios
- React Hook Form
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## 🔧 Prerequisites

- Node.js (v22 recommended)
- npm or yarn
- Docker (optional, for containerized deployment)

## 💻 Local Development Setup

### 1. Clone the Repository

```bash
git clone hhttps://github.com/Sam-Waithaka/siq_frontend.git
cd siq_frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root and add:

```
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🐳 Docker Deployment

### Building the Docker Image and running with Docker compose

```bash
docker-compose up --build -d
```


The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
siq_frontend
├── public
├── src
│   ├── assets
│   ├── components
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Logout.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .dockerignore
├── .env
├── Dockerfile
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## 🔒 Authentication Flow

1. User registers with name, email, and password
2. Upon successful registration, redirected to login
3. Login generates JWT tokens stored in localStorage
4. Protected routes require valid authentication
5. Logout removes tokens and redirects to login

## 🛠 Customization

- Modify Tailwind configuration in `tailwind.config.js`
- Update API endpoints in individual components
- Adjust styling and components as needed


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
git clone https://github.com/yourusername/user-management-app.git
cd user-management-app
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

### Building the Docker Image

```bash
docker build -t user-management-frontend .
```

### Running with Docker Compose

```bash
docker-compose up -d
```

The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── LogoutButton.jsx
│   └── ui/
├── pages/
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── Profile.jsx
├── App.jsx
└── main.jsx
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

## 📄 License

[Your License - e.g., MIT]

## 👥 Contributors

[Your Name]

## 🐛 Issues

Report issues at: [Your GitHub Repository Issues Page]
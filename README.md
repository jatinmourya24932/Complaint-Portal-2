# 🎓 AI-Enabled Complaint Management Portal

A full-stack Complaint Management System developed for educational institutions to streamline complaint registration, tracking, and resolution. The application provides role-based access, secure authentication, complaint assignment, and an AI-ready architecture for future intelligent features.

---

## 🚀 Live Demo

### Frontend
https://complaint-portal-2.vercel.app/

### Backend
https://complaint-portal-backend.up.railway.app/

---

# ✨ Features

## 👨‍🎓 Student

- Secure Registration & Login (JWT Authentication)
- Raise Complaints
- Complaint Tracking
- View Complaint Status
- Anonymous Complaint Support
- Upload Attachments
- Student Profile Management

---

## 👨‍🏫 Faculty

- Faculty Dashboard
- View Assigned Complaints
- Update Complaint Status
- Complaint Resolution Workflow

---

## 👨‍💼 HOD

- Department-wise Complaint Monitoring
- Approve / Reject Complaints
- View Faculty Complaints
- Department Dashboard

---

## 👑 Admin

- Dashboard Analytics
- Faculty Management
- Department Management
- Subject Management
- Student Profile Management
- Complaint Monitoring
- User Management

---

# 🤖 AI Features (Planned)

- AI Complaint Summary
- Spam Detection
- Duplicate Complaint Detection
- Sentiment Analysis
- Smart Complaint Categorization
- AI Chat Assistant

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- Axios
- React Router

## Backend

- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- Hibernate

## Database

- MySQL

## Deployment

- Railway (Backend)
- Vercel (Frontend)

---

# 🔐 Authentication

- JWT Token Authentication
- Role-Based Authorization
- Protected APIs
- Password Encryption using BCrypt

---

# 📂 Project Structure

```
Complaint-Portal
│
├── Backend
│   ├── Controllers
│   ├── Services
│   ├── Repositories
│   ├── Entities
│   ├── DTOs
│   ├── Security
│   └── Configuration
│
└── Frontend
    ├── Components
    ├── Pages
    ├── Layouts
    ├── Context
    ├── Services
    └── Routes
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Complaint-Portal.git
```

## Backend

```bash
cd Backend/complaintportal

mvn spring-boot:run
```

## Frontend

```bash
cd frontend/complaint-portal-frontend

npm install

npm run dev
```

---

# Environment Variables

Backend

```
DB_URL=
DB_USERNAME=
DB_PASSWORD=

JWT_SECRET=

MAIL_USERNAME=
MAIL_PASSWORD=
```

Frontend

```
VITE_API_BASE_URL=
```

---

# Screenshots

- Landing Page
- Login
- Student Dashboard
- Faculty Dashboard
- HOD Dashboard
- Admin Dashboard
- Complaint Management

---

# Future Enhancements

- Excel Import for Students
- Email Notifications
- Push Notifications
- AI Complaint Analysis
- Analytics Dashboard
- Mobile Responsive UI
- Docker Support
- CI/CD Pipeline

---

# Author

**Jatin Mourya**

Java Full Stack Developer

---

# License

This project is developed for educational purposes.

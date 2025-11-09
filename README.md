# Project Nexus - Customer Service Dashboard

🚀 **A unified communications hub integrating Sonar CRM with multi-channel customer service capabilities including calls, SMS, email, and WhatsApp messaging.**

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [API Integrations](#api-integrations)
- [Development](#development)
- [Deployment](#deployment)
- [Project Timeline](#project-timeline)

---

## 🎯 Overview

Project Nexus is a comprehensive customer service dashboard that centralizes all customer communications into a single platform. Customer service representatives can manage calls, SMS, emails, WhatsApp messages, and CRM data from one unified interface.

### Key Objectives

- **Unified Communications**: Single platform for all customer interactions
- **CRM Integration**: Direct integration with Sonar CRM for customer data
- **Multi-Channel Support**: Handle calls, SMS, email, and WhatsApp
- **Ticket Management**: Streamlined job/ticket handling
- **Real-time Updates**: Live activity feed for all interactions

---

## ✨ Features

### Core Features

- **📞 Voice Calls**: Twilio-powered voice call management
- **💬 SMS**: Send and receive text messages
- **📧 Email Integration**: Microsoft Graph API for email/calendar
- **📱 WhatsApp Business**: WhatsApp messaging via Twilio API
- **👤 Customer Profiles**: Complete customer information from Sonar CRM
- **🎫 Ticket/Job Sync**: Real-time ticket updates
- **📊 Activity Feed**: Unified timeline of all interactions
- **🔐 Authentication**: Secure JWT-based authentication

---

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI framework
- **Material-UI** - Component library
- **React Router** - Navigation
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **JWT** - Authentication

### APIs & Integrations

- **Sonar CRM API** - Customer data and CRM integration
- **Microsoft Graph API** - Email and calendar (via Azure AD)
- **Twilio API** - SMS, voice calls, and WhatsApp
- **WhatsApp Business API** - WhatsApp messaging

---

## 📁 Project Structure

```
project-nexus-dashboard/
├── frontend/               # React frontend application
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API service layer
│   │   └── utils/         # Utility functions
│   ├── .env.example       # Environment variables template
│   └── package.json       # Frontend dependencies
│
├── backend/               # Node.js/Express backend
│   ├── src/               # Source code
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── middleware/    # Express middleware
│   ├── .env.example       # Environment variables template
│   └── package.json       # Backend dependencies
│
├── docs/                  # Project documentation
├── LICENSE                # MIT License
└── README.md             # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** (v13 or higher)
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cradiaz93/project-nexus-dashboard.git
   cd project-nexus-dashboard
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../backend
   npm install
   ```

4. **Set Up Environment Variables**

   See [Environment Configuration](#environment-configuration) section below.

5. **Start Development Servers**

   **Frontend** (runs on http://localhost:3000):
   ```bash
   cd frontend
   npm start
   ```

   **Backend** (runs on http://localhost:5000):
   ```bash
   cd backend
   npm run dev
   ```

---

## ⚙️ Environment Configuration

### Frontend Setup

1. Navigate to the `frontend` directory
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your actual credentials:

```env
# Backend API
REACT_APP_API_URL=http://localhost:5000/api

# Sonar CRM
REACT_APP_SONAR_API_URL=https://qflix.sonar.software/api/v1
REACT_APP_SONAR_API_TOKEN=your_sonar_api_token

# Azure AD / Microsoft Graph
REACT_APP_AZURE_CLIENT_ID=a81c3e0e-24f2-487a-8fd5-e8e608b30947
REACT_APP_AZURE_TENANT_ID=your_tenant_id
REACT_APP_AZURE_REDIRECT_URI=http://localhost:3000

# Twilio
REACT_APP_TWILIO_ACCOUNT_SID=your_twilio_sid
REACT_APP_TWILIO_PHONE_NUMBER=+1234567890

# WhatsApp
REACT_APP_WHATSAPP_PHONE_NUMBER=+1234567890
```

### Backend Setup

Follow similar steps for the backend `.env` file (to be created in Week 2).

---

## 🔌 API Integrations

### 1. Sonar CRM API

**Purpose**: Customer data, account information, tickets/jobs

**Setup**:
1. Log in to Sonar CRM
2. Navigate to Settings > API
3. Generate an API token
4. Add token to your `.env` file

**Documentation**: [Sonar API Docs](https://sonar.software/apidocs/)

### 2. Microsoft Graph API (Email & Calendar)

**Purpose**: Email integration, calendar management

**Setup**:
1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to App Registrations
3. Use existing app: "Projet Nexus Email Integration"
4. Client ID: `a81c3e0e-24f2-487a-8fd5-e8e608b30947`
5. Configure redirect URIs and permissions

**Required Permissions**:
- `User.Read`
- `Mail.Read`
- `Mail.ReadWrite`
- `Mail.Send`
- `Calendars.Read`
- `Calendars.ReadWrite`

### 3. Twilio API (SMS & Voice)

**Purpose**: SMS messaging, voice calls, WhatsApp

**Setup**:
1. Sign up at [Twilio Console](https://console.twilio.com)
2. Get your Account SID and Auth Token
3. Purchase a phone number
4. Add credentials to `.env`

### 4. WhatsApp Business API

**Purpose**: WhatsApp messaging

**Setup**:
1. Enable WhatsApp in Twilio Console
2. Follow WhatsApp Business API setup
3. Configure webhook endpoints

---

## 💻 Development

### Development Workflow

1. Create a new branch for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push to GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request

### Code Style

- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

### Testing

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test
```

---

## 🚢 Deployment

### Frontend Deployment

```bash
cd frontend
npm run build
```

Deploy the `build/` directory to your hosting service.

### Backend Deployment

Ensure environment variables are set on your production server, then:

```bash
cd backend
npm run build
npm start
```

---

## 📅 Project Timeline

### Week 1 (Nov 9-15, 2025) - ✅ COMPLETE

- ✅ Feature specifications documented
- ✅ API credentials secured
- ✅ Wireframes created
- ✅ Development environment established
- ✅ GitHub repository created

### Week 2 (Nov 16-22, 2025) - 🚧 IN PROGRESS

- 🚧 Frontend application initialization (90% complete)
- ⏳ Backend application setup
- ⏳ JWT authentication implementation

### Upcoming Milestones

- **Week 3**: CRM Integration Complete (Nov 29)
- **Week 4**: Email Integration Complete (Dec 6)
- **Week 5**: WhatsApp/SMS Integration (Dec 13)
- **Week 6**: Unified Activity Feed (Dec 20)
- **Week 7**: Ticket/Job Sync (Dec 27)
- **Week 8**: Testing & UAT (Jan 3, 2026)
- **Week 9**: Production Deployment (Jan 11, 2026)

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details

## 👤 Author

**Carlos Diaz**
- GitHub: [@cradiaz93](https://github.com/cradiaz93)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Project Status**: Week 2 - Frontend Configuration Complete  
**Last Updated**: November 9, 2025

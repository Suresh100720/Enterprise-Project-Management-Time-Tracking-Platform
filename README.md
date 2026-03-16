Enterprise Project Management & Time Tracking Platform 

A Full Stack Web Application for **Managing Projects, Tasks, Teams, and Time Tracking**

![last commit](https://img.shields.io/badge/last%20update-recent-green)
![open source](https://img.shields.io/badge/open%20source-yes-blue)
![license](https://img.shields.io/badge/license-MIT-orange)

View Demo · Installation · Usage

Built with 🤍 using **MERN Stack**

🚀 A project developed to implement **Enterprise-Level Project Management System with Time Tracking**

---

# About the Project 🧑‍💻

The **Enterprise Project Management & Time Tracking Platform** is a full-stack application designed to help organizations efficiently manage projects, teams, tasks, and working hours.

This system provides a centralized dashboard where organizations can plan projects, assign tasks to team members, monitor project progress, and track employee work hours.

The platform supports **multi-role access**, allowing different users such as administrators, project managers, team members, and clients to interact with the system based on their permissions.

The application includes a **modern dashboard interface** built using React and Ant Design, while the backend handles API operations and data management using Node.js, Express, and MongoDB.

---

# Project Screenshot 📸

Example Dashboard Layout

Enterprise Project Management Dashboard

Sidebar Navigation

Dashboard Overview
Projects Management
Task Board (Kanban)
Time Tracking System
Analytics Dashboard

Project Table Example

Project Name | Category | Budget | Billing Type | Status | Actions

---

# Scope 😲

i. Helps organizations manage multiple projects efficiently.

ii. Allows teams to collaborate on tasks and track progress.

iii. Provides time tracking to monitor employee work hours.

iv. Enables administrators to manage users and teams.

v. Displays project analytics and progress dashboards.

vi. Demonstrates a complete **enterprise-level MERN stack application**.

vii. Can be extended into a full **Project Management SaaS platform like Jira or ClickUp**.

---

# Tech Stack 🍻

## Frontend

* React
* React Router
* Axios
* Ant Design
* Tailwind CSS
* Recharts (Analytics Charts)
* Gantt Task React (Project Timeline)
* Hello Pangea DnD (Kanban Board)

## Backend

* Node.js
* Express.js
* Socket.io

## Database

* MongoDB
* Mongoose

---

# Features 🤩

## Authentication System

* User Registration
* Login System
* Role-based Access Control (RBAC)

## Project Management

* Create Projects
* Delete Projects
* Project Templates
* Budget Allocation (Fixed / Hourly)
* Project Categories
* Project Tags
* Custom Fields & Metadata

## Task Management

* Create Tasks
* Assign Tasks to Team Members
* Kanban Board (Drag & Drop)
* Task Priority Management
* Task Status Tracking

## Milestone Management

* Define project milestones
* Track milestone progress

## Team Management

* Assign team members to projects
* Define roles for each team member

## Time Tracking

* Log working hours
* Track time spent on tasks
* Maintain time entry records

## Analytics Dashboard

* Project progress charts
* Burn-down charts
* Resource utilization graphs
* Budget tracking

## File Management

* Upload project files
* Store deliverables
* Manage attachments

## Notifications

* Real-time updates using Socket.io
* Task and project notifications

---

# Requirements 😅

Install the following before running the project:

Node.js
[https://nodejs.org](https://nodejs.org)

MongoDB
[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)

VS Code (Recommended Editor)
[https://code.visualstudio.com/](https://code.visualstudio.com/)

---

# Setup & Installation 👀

Follow these steps to run the project locally.

---

# Step 1 — Clone Repository

```bash
git clone https://github.com/yourusername/enterprise-project-management.git
```

Move into the project folder:

```bash
cd enterprise-project-management
```

---

# Step 2 — Backend Setup

Navigate to backend folder

```bash
cd backend
```

Install backend dependencies

```bash
npm install
```

Libraries used in backend:

* express
* mongoose
* cors
* bcryptjs
* jsonwebtoken
* socket.io
* nodemon

If required install manually:

```bash
npm install express mongoose cors bcryptjs jsonwebtoken socket.io nodemon
```

---

# Step 3 — MongoDB Setup

Start MongoDB server

```bash
mongod
```

The application connects to MongoDB using:

```
mongodb://127.0.0.1:27017/enterprisePM
```

---

# Step 4 — Run Backend Server

Start backend server

```bash
node server.js
```

or

```bash
nodemon server.js
```

Backend will run on

```
http://localhost:5000
```

Example API endpoint:

```
http://localhost:5000/api/projects
```

---

# Step 5 — Frontend Setup

Open another terminal and navigate to frontend folder

```bash
cd frontend
```

Install frontend dependencies

```bash
npm install
```

Libraries used in frontend:

* react
* react-router-dom
* axios
* antd
* tailwindcss
* recharts
* gantt-task-react
* @hello-pangea/dnd
* socket.io-client

If needed install manually:

```bash
npm install react-router-dom axios antd
npm install recharts gantt-task-react @hello-pangea/dnd socket.io-client
npm install -D tailwindcss postcss autoprefixer
```

---

# Step 6 — Run Frontend

Start frontend development server

```bash
npm run dev
```

Frontend will run on

```
http://localhost:5173
```

Open browser and visit

```
http://localhost:5173
```

---

# API Endpoints 📡

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/projects      | Get all projects |
| POST   | /api/projects      | Create project   |
| PUT    | /api/projects/:id  | Update project   |
| DELETE | /api/projects/:id  | Delete project   |
| POST   | /api/auth/login    | Login user       |
| POST   | /api/auth/register | Register user    |

---

# Example Project Data 📄

```json
{
  "name": "Website Redesign",
  "category": "UI/UX",
  "tags": ["frontend","design"],
  "billingType": "Fixed",
  "budget": 5000,
  "template": "Design"
}
```

---

# How to Stop the Application 🛑

Press

```
CTRL + C
```

in the terminal running the server.

Stop both:

Backend terminal
Frontend terminal

---

# Roadmap 🛵

Future improvements:

* Advanced role-based access control
* Client collaboration module
* Invoice generation system
* AI-powered task suggestions
* Advanced project analytics
* Cloud storage integration
* Email notification system

---

# Contributing 🤝

Pull requests are welcome.

For major changes please open an issue first to discuss what you would like to change.

---

# Author 👨‍💻

Developed by Suresh

---

# License 📜

This project is licensed under the **MIT License**.

---

# Built with 🤍

Enterprise Project Management Platform using

React · Node.js · Express · MongoDB


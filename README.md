# PREPROUTE

A full-stack platform for creating, managing, publishing, and tracking MCQ-based tests through a structured Subject → Topic → SubTopic hierarchy.

---

# 📋 Table of Contents

* [Overview](#-overview)
* [Frontend Overview](#-frontend-overview)
* [Backend Overview](#-backend-overview)
* [Project Setup](#-project-setup)
* [Project Vision](#-project-vision)
* [Problem Definition](#-problem-definition)
* [Solution Approach](#-solution-approach)
* [Technical Decisions](#-technical-decisions)
* [Core Features](#-core-features)

  * [Authentication](#authentication)
  * [Subject Hierarchy](#subject-hierarchy)
  * [Dashboard](#dashboard)
  * [Test Management](#test-management)
  * [Question Management](#question-management)
  * [Publishing Workflow](#publishing-workflow)
  * [Tracking Workflow](#tracking-workflow)
* [System Architecture](#-system-architecture)
* [Technology Stack](#-technology-stack)
* [User Journey](#-user-journey)
* [Business Workflow](#-business-workflow)
* [Authentication Flow](#-authentication-flow)
* [Dashboard Module](#-dashboard-module)
* [Subject Hierarchy Module](#-subject-hierarchy-module)
* [Test Management Module](#-test-management-module)
* [Question Management Module](#-question-management-module)
* [CSV Import Workflow](#-csv-import-workflow)
* [Publishing Workflow](#-publishing-workflow)
* [Tracking Workflow](#-tracking-workflow)
* [Draft Persistence Workflow](#-draft-persistence-workflow)
* [Test Lifecycle](#-test-lifecycle)
* [Data Model Overview](#-data-model-overview)
* [Validation Strategy](#-validation-strategy)
* [Security](#-security)
* [Monitoring & Insights](#-monitoring--insights)
* [API V1 Coverage](#-api-v1-coverage)
* [Frontend V1 Coverage](#-frontend-v1-coverage)
* [Testing Strategy](#-testing-strategy)
* [Performance Optimizations](#-performance-optimizations)
* [Deployment Overview](#-deployment-overview)
* [Current Status](#-current-status)

---

# 🎯 Overview

PrepRoute is a complete test management platform designed to streamline the creation, organization, publishing, and tracking of MCQ-based tests.

The system provides an end-to-end workflow for content creators, educators, trainers, and administrators who need to build structured assessments and manage their lifecycle efficiently.

The platform is organized around an academic hierarchy:
```text
* Subject -> Topic -> SubTopic
* Test -> Questions
```
PrepRoute consists of two independently deployable applications:

### Frontend Application

A modern React-based user interface responsible for:

* Authentication
* Dashboard management
* Test creation
* Question management
* CSV question import
* Publishing workflows
* Lifecycle tracking

### Backend API

A REST-based Node.js API responsible for:

* Authentication
* Business rules
* Test lifecycle management
* Question persistence
* Publishing automation
* Metrics collection
* Data storage

Together, both applications provide a complete workflow:

```text
Login
-> Dashboard
-> Create Test
-> Configure Test
-> Add Questions
-> Publish
-> Track Status
```

---

# 🖥 Frontend Overview

The frontend application provides the complete user interface for managing tests and questions.

Primary Responsibilities:

* Authentication UI
* Dashboard
* Test Creation
* Test Editing
* Question Management
* CSV Import
* Publishing Workflow
* Tracking Workflow
* Draft Persistence

Frontend Documentation:

```text
frontend/README.md
```

---

# ⚙ Backend Overview

The backend application provides all API endpoints and business workflows required by the platform.

Primary Responsibilities:

* Authentication
* Subject Hierarchy Management
* Test Management
* Question Management
* Publishing Automation
* Status Synchronization
* Metrics Collection
* Insights Generation

Backend Documentation:

```text
backend/README.md
```

---

# 🚀 Project Setup

### 1. Clone Repository

```bash
git clone <repository-url>
```

---

### 2. Setup MongoDB

Start MongoDB locally or configure a cloud instance.

Example:

```env
MONGODB_URI=mongodb://localhost:27017/preproute
```

---

### 3. Setup Backend

Navigate:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
PORT=7500

MONGODB_URI=<mongodb-uri>

ACCESS_TOKEN_SECRET=<secret>

REFRESH_TOKEN_SECRET=<secret>

CORS_ORIGIN=http://localhost:5173
```

Run backend:

```bash
npm run dev
```

---

### 4. Setup Frontend

Navigate:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create environment file:

```env
VITE_API_URL=http://localhost:7500/api/v1
```

Run frontend:

```bash
npm run dev
```

---

### 5. Access Application

Frontend

```text
http://localhost:5173
```

Backend:

```text
http://localhost:7500/api/v1
```

---

# 🚀 Project Vision

The objective of PrepRoute is to provide a structured and maintainable platform for managing MCQ-based test workflows.

The platform focuses on:

* Organized tests management
* Efficient question creation
* Flexible publishing options
* Lifecycle visibility
* Workflow continuity
* Scalable architecture


PrepRoute centralizes the complete test management process into a single workflow.

The platform provides:

* Authentication
* Subject hierarchy management
* Test configuration
* Question management
* Bulk question import
* Publishing controls
* Lifecycle tracking
* Metrics-ready architecture

This allows users to move from test creation to publication using a consistent and predictable process.

---

# ⚙ Technical Decisions

## Database Layer

MongoDB was selected for its flexible document structure and efficient handling of hierarchical relationships.

---

## Backend Layer

Node.js and Express.js were selected to provide:

* RESTful APIs
* Modular architecture
* Authentication support
* Scalable business workflows

---

## Frontend Layer

React and TypeScript were selected to provide:

* Component-based architecture
* Strong typing
* Reusable UI patterns
* Predictable state management

---

## Communication Layer

REST APIs were selected to maintain a clear separation between frontend and backend systems.

---

## State Management

Redux Toolkit and React Context are used together:

* Redux manages application-level persistence.
* Context manages workflow-specific state.

---

## Validation Strategy

Validation is applied across:

```text
-> Frontend
-> API Layer
-> Database Layer
```

This ensures data consistency throughout the application.


# ✨ Core Features

## Authentication

✅ User Registration

✅ User Login

✅ Session Persistence

✅ Refresh Token Rotation

✅ Protected Routes

---

## Subject Hierarchy

✅ Subjects

✅ Topics

✅ SubTopics

✅ Dynamic Hierarchy Resolution

---

## Dashboard

✅ Statistics Overview

✅ Recent Tests

✅ Search

✅ Filtering

✅ Infinite Pagination

---

## Test Management

✅ Create Test

✅ Edit Test

✅ Draft Workflow

✅ Validation

---

## Question Management

✅ Question Creation

✅ Question Editing

✅ Completion Tracking

✅ CSV Import

✅ Marking Scheme Configuration

---

## Publishing Workflow

✅ Immediate Publish

✅ Scheduled Publish

✅ Expiry Configuration

---

## Tracking Workflow

✅ Draft

✅ Scheduled

✅ Live

✅ Expired

---

# 🏗 System Architecture

```text
User

-> Frontend Application

-> Backend API

-> Business Services

-> Database

-> Metrics Engine

-> Insights Export
```

The architecture separates presentation, business logic, persistence, and analytics responsibilities.

---

# 🛠 Technology Stack

## Frontend

* React
* TypeScript
* Redux Toolkit
* Tailwind CSS
* Axios
* Framer Motion
* Zod
* Papa Parse

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

---

# 👤 User Journey

```text
Register

-> Login

-> Dashboard

-> Create Test

-> Add Questions

-> Publish

-> Track Lifecycle
```

---

# 🔄 Business Workflow

```text
Subject

-> Topic

-> SubTopic

-> Test

-> Questions

-> Publish

-> Tracking
```

The workflow ensures that every question belongs to a structured academic hierarchy.

---

# 🔐 Authentication Flow

```text
Register

-> Login

-> JWT Generation

-> Protected Access

-> Refresh Token Rotation

-> Logout
```

Authentication is enforced across all protected modules.

---

# 📊 Dashboard Module

The dashboard acts as the central entry point of the system.

Responsibilities:

* Overview statistics
* Recent activity
* Test listing
* Filtering
* Search

The dashboard is optimized using pagination and lazy loading.

---

# 📚 Subject Hierarchy Module

The hierarchy module organizes educational content.

Structure:

```text
Subject

-> Topic

-> SubTopic
```

Benefits:

* Improved organization
* Easier navigation
* Reusable content classification

---

# 📝 Test Management Module

A test represents a collection of questions grouped under a hierarchy.

Configuration includes:

* Name
* Category
* Difficulty
* Subject
* Topics
* SubTopics
* Marks
* Duration

---

# ❓ Question Management Module

Questions are attached to tests.

Each question contains:

* Question Statement
* Options
* Correct Answer
* Difficulty
* Explanation
* Topic Mapping
* SubTopic Mapping

---

# 📥 CSV Import Workflow

The system supports bulk question creation.

Workflow:

```text
CSV File

-> Validation

-> Mapping

-> Draft Generation

-> Question Review

-> Save
```

Validation ensures data consistency before insertion.

---

# 📤 Publishing Workflow

Supported Modes:

### Immediate Publish

```text
Draft

-> Live
```

### Scheduled Publish

```text
Draft

-> Scheduled

-> Live
```

---

# 📈 Tracking Workflow

The platform continuously tracks test status.

States:

```text
Draft

-> Scheduled

-> Live

-> Expired
```

This enables administrators to monitor the lifecycle of every assessment.

---

# 💾 Draft Persistence Workflow

The system supports workflow continuity.

Capabilities:

* Save Draft
* Resume Draft
* Restore Context
* Continue Editing

This prevents accidental data loss during creation workflows.

---

# 🔄 Test Lifecycle

```text
Create

-> Draft

-> Questions

-> Publish

-> Live

-> Expired
```

Every assessment follows this lifecycle.

---

# 🗄 Data Model Overview

Primary Entities:

* User
* Subject
* Topic
* SubTopic
* Test
* Question

Relationships:

```text
User

-> Tests

Test

-> Questions

Subject

-> Topics

Topic

-> SubTopics
```

---

# ✅ Validation Strategy

Validation is applied at multiple levels:

* Frontend Forms
* API Layer
* Database Layer

This ensures consistency and integrity.

---

# 🔒 Security

Implemented Measures:

* JWT Authentication
* Refresh Token Rotation
* Protected Routes
* HttpOnly Cookies
* Password Hashing

---

# 📊 Monitoring & Insights

Metrics are collected for:

* API Requests
* Database Operations
* Service Execution
* Response Times

These metrics support future optimization initiatives.

---

# 🔌 API V1 Coverage

API V1 supports:

✅ Authentication

✅ Subjects

✅ Topics

✅ SubTopics

✅ Tests

✅ Questions

✅ Publishing

✅ Tracking

---

# 🖥 Frontend V1 Coverage

Frontend V1 supports:

✅ Authentication

✅ Dashboard

✅ Test Management

✅ Question Management

✅ Publishing

✅ Tracking

✅ Draft Persistence

---

# 🧪 Testing Strategy

Testing focuses on:

* Request Validation
* Response Validation
* Authentication
* Persistence
* Workflow Accuracy
* Publishing Rules

---

# ⚡ Performance Optimizations

Implemented Optimizations:

* Infinite Pagination
* Memoization
* Service Abstraction
* Context Separation
* Shared Components
* Reusable UI Library

---

# 🚀 Deployment Overview

```text
Frontend

-> API Gateway

-> Backend Services

-> MongoDB

-> Metrics Engine
```

The architecture supports independent deployment of frontend and backend systems.

---

# ✅ Current Status

Authentication ............ Complete

Subject Hierarchy ......... Complete

Topic Hierarchy ........... Complete

SubTopic Hierarchy ........ Complete

Dashboard ................ Complete

Test Management ........... Complete

Question Management ....... Complete

CSV Import ............... Complete

Publishing Workflow ....... Complete

Tracking Workflow ......... Complete

Draft Persistence ......... Complete

API V1 .................... Complete

Frontend V1 ............... Complete

---

## Final Status

✅ Stable Full Stack Platform

✅ API V1 Complete

✅ Frontend V1 Complete

✅ Documentation Ready

✅ Production Architecture Established

---

**Version:** 1.0.0

**Last Updated:** June 2026

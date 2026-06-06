# TestDash Backend API

A scalable Node.js and Express.js backend powering the TestDash platform for creating, managing, publishing, scheduling, and tracking online tests.

---
## 📋 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
  * [Authentication](#authentication)
  * [Subject Hierarchy](#subject-hierarchy)
  * [Test Management](#test-management)
  * [Publishing Workflow](#publishing-workflow)
  * [Question Management](#question-management)
  * [Monitoring](#monitoring)
* [Technology Stack](#-technology-stack)
* [Architecture](#-architecture)
* [Prerequisites](#-prerequisites)
* [Installation](#-installation)
* [Environment Configuration](#-environment-configuration)
* [Running the Application](#️-running-the-application)
* [Project Structure](#-project-structure)
* [Publishing Workflow](#-publishing-workflow)
* [API Documentation](#-api-documentation)
* [Authentication](#-authentication)
* [Error Handling](#-error-handling)
* [Database Design](#-database-design)
* [Metrics & Insights](#-metrics--insights)
* [API Testing](#-api-testing)
* [Logging](#-logging)
* [Troubleshooting](#-troubleshooting)
* [Backend Status](#-backend-status)

---


## 🎯 Overview

TestDash Backend provides a complete REST API for managing:
- **User Authentication** - Registration, login, and session management
- **Tests/Quizzes** - Create, read, update, and publish tests
- **Questions** - Manage multiple-choice questions with bulk operations
- **Subjects & Topics** - Organize tests by subject and topic hierarchy
- **User Data** - Secure user profile and test progress tracking

The API follows RESTful principles and implements industry best practices for security, error handling, and code organization.

---




# ✨ Features

## Authentication

✅ User Registration

✅ User Login

✅ Current User Profile

✅ Refresh Token Rotation

✅ Logout

✅ JWT Authentication

## Subject Hierarchy

✅ Subject CRUD

✅ Topic CRUD

✅ SubTopic CRUD

## Test Management

✅ Create Test

✅ Update Test

✅ Delete Test

✅ Get Single Test

✅ Get All Tests

## Publishing Workflow

✅ Draft Tests

✅ Immediate Publishing

✅ Scheduled Publishing

✅ Automatic Expiry

## Question Management

✅ Bulk Question Creation

✅ Test Question Linking

## Monitoring

✅ Request Metrics

✅ Database Metrics

✅ Service Metrics

✅ Insights Export

---

# 🛠 Technology Stack

| Component        | Technology            |
| ---------------- | --------------------- |
| Runtime          | Node.js               |
| Framework        | Express.js            |
| Database         | MongoDB               |
| ODM              | Mongoose              |
| Authentication   | JWT                   |
| Password Hashing | bcrypt                |
| Environment      | dotenv                |
| Cookies          | cookie-parser         |
| Logging          | Custom Metrics Logger |
| Validation       | Custom Utilities      |

---

# 🏗 Architecture

The backend follows a layered architecture.

```text
Client
  │
  ▼
Router
  │
  ▼
Controller
  │
  ▼
Service
  │
  ▼
Model
  │
  ▼
MongoDB
```

### Router Layer

Maps HTTP endpoints to controllers.

### Controller Layer

Handles requests and responses.

### Service Layer

Contains business rules and application logic.

### Model Layer

Handles MongoDB persistence.

### Middleware Layer

Responsible for:

* Authentication
* Error Handling
* Request Processing

---


## 📦 Prerequisites

Before running the application, ensure you have:

- **Node.js**
- **npm** 
- **MongoDB** (Local or Cloud)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd TestDash/backend
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages from `package.json`:
- Express.js for server framework
- MongoDB driver and Mongoose for database
- JWT and bcrypt for authentication
- Logging and middleware utilities

### 3. Verify Installation

```bash
npm list --depth=0
```

---

## 🔐 Environment Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=3000
CORS_ORIGIN="*"
MONGODB_URI=<mongodb-uri>


ACCESS_TOKEN_SECRET=secret_access
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=secret_refrsh
REFRESH_TOKEN_EXPIRY=10d

NODE_ENV=development
```


## ▶️ Running the Application

### Development Mode (with auto-reload)

```bash
npm run dev
```

The server starts on `http://localhost:3000` with hot-reload enabled.

### Production Mode

```bash
npm start
```

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── app.js                 # Express app initialization
│   ├── server.js              # Server entry point
│   │ 
│   ├── constants/             # Application constants
│   │   ├── config.js         
│   │   └── ...
│   │
│   ├── controllers/           # Route handlers and business logic
│   │   ├── auth.controller.js
│   │   ├── test.controller.js
│   │   ├── question.controller.js
│   │   └── ...
│   │
│   ├── models/                # Database connection and models
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── test.model.js
│   │   └── ...
│   │
│   ├── services/              # Business logic layer
│   │   ├── auth.service.js
│   │   ├── test.service.js
│   │   └── ...
│   │
│   ├── middlewares/              # Express middlewares
│   │   ├── auth.middleware.js    # JWT verification
│   │   ├── error.middleware.js       # Global error handling
│   │   └── ...
│   │
│   ├── routers/                  # Route definitions
│   │   ├── auth.route.js
│   │   ├── test.route.js
│   │   └── ...
│   │
│   ├── utils/
│   │   ├── asyncHandler.js       # Async error wrapper
│   │   ├── apiError.js           # Custom error class
│   │   ├── apiResponse.js        # Standard response wrapper
│   │   └── ...
├── insights/insights.json        # Analytics and data insights
│       
├── .env                          # Environment variables (gitignored)
├── sample.env                    # Example environment template
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
└── README.md                     # This file
```

### Directory Purposes

- **controllers/** - Handle HTTP requests and responses
- **models/** - Define MongoDB schemas
- **services/** - Encapsulate business logic
- **middlewares/** - Request processing (auth,  any validation, error handling)
- **routers/** - Map routes to controllers
- **utils/** - Reusable helper functions
- **constants/** - Application-wide constants

---


# 🚀 Publishing Workflow

## Draft

```text
status = draft
```

Test is not available to candidates.

---

## Immediate Publish

```text
publishMode = immediate
```

Results:

```text
status = live

publishedAt = current time
```

---

## Scheduled Publish

```text
publishMode = scheduled
```

Results:

```text
status = draft

scheduledAt = future datetime
```

---

## Availability

```text
availabilityDays
```

Automatically generates:

```text
availableUntil
```

---

## Status Lifecycle

```text
Draft
  ↓
Live
  ↓
Expired
```

---

## Automatic Synchronization

Helper Service:

```text
testSync.service.js
```

Automatically updates:

```text
Draft → Live

Live → Expired
```

---

# 🔌 API Documentation

## Health

```http
GET /health
```

---

## Authentication

```http
POST /auth/register
POST /auth/login
POST /auth/refresh-token
POST /auth/logout
GET  /auth/me
```

---

## Subjects

```http
GET    /subjects
GET    /subjects/:id
POST   /subjects
PATCH  /subjects/:id
DELETE /subjects/:id
```

---

## Topics

```http
GET    /topics
GET    /topics/:id
GET    /topics/subject/:subjectId
POST   /topics
PATCH  /topics/:id
DELETE /topics/:id
```

---

## SubTopics

```http
GET    /sub-topics
GET    /sub-topics/:id
GET    /sub-topics/topic/:topicId
POST   /sub-topics
PATCH  /sub-topics/:id
DELETE /sub-topics/:id
```

---

## Tests

```http
GET    /tests
GET    /tests/:id
POST   /tests
PATCH  /tests/:id
DELETE /tests/:id
```

---

## Questions

```http
POST /questions/bulk
```

---

# 🔐 Authentication

Authentication uses:

* Access Tokens
* Refresh Tokens
* HttpOnly Cookies
* JWT

---

## Login

Returns:

* User Information
* Access Token

Sets:

```text
accessToken cookie

refreshToken cookie
```

---

## Refresh Token Rotation

Every refresh request:

```text
Old Refresh Token
        ↓
Invalidate
        ↓
Generate New Refresh Token
        ↓
Store In Database
        ↓
Send New Cookie
```

---

## Logout

Logout performs:

```text
Clear Cookies

Remove Refresh Token

Invalidate Session
```

---

# ⚠ Error Handling

All API responses follow a consistent structure.

## Success

```json
{
  "statusCode": 200,
  "success": true,
  "data": {},
  "message": "Success"
}
```

## Error

```json
{
  "statusCode": 400,
  "success": false,
  "data": null,
  "message": "Error Message"
}
```

---

# 🗄 Database Design

## Users

```javascript
{
  userId,
  email,
  fullName,
  password,
  refreshToken
}
```

---

## Subjects

```javascript
{
  name
}
```

---

## Topics

```javascript
{
  subjectId,
  name
}
```

---

## SubTopics

```javascript
{
  topicId,
  name
}
```

---

## Tests

```javascript
{
  userId,

  name,

  category,

  subjectId,

  topics[],

  subTopics[],

  questions[],

  status,

  publishMode,

  scheduledAt,

  publishedAt,

  availableUntil,

  difficulty,

  correctMarks,

  wrongMarks,

  unattemptMarks,

  totalTime,

  totalMarks,

  totalQuestions
}
```

---

## Questions

```javascript
{
  testId,

  topicId,

  subTopicId,

  type,

  question,

  option1,

  option2,

  option3,

  option4,

  correctOption,

  difficulty,

  explanation
}
```

---


# 📊 Metrics & Insights

Metrics collected through:

```text
src/utils/metricsLogger.js
```

Output:

```text
insights/insights.json
```

Tracked Operations:

* API Requests
* Database Reads
* Database Writes
* Service Execution Time
* Response Time

Used For:

* Performance Analysis
* Backend Evaluation
* Optimization Reports

---

# 🧪 API Testing

Manual testing completed using Postman.

Testing Artifacts:

```text
api_tests/API_V1/API_V1_REQ_RES.md

api_tests/API_V1/API_V1_TEST_RES.md

api_tests/API_V1/get_all_tests.txt

api_tests/API_V1/test_t2.txt
```

---

## Modules Tested

✅ Authentication

✅ Subjects

✅ Topics

✅ SubTopics

✅ Tests

✅ Questions

---

## Routes Tested

| Module         | Status |
| -------------- | ------ |
| Authentication | ✅ PASS |
| Subjects       | ✅ PASS |
| Topics         | ✅ PASS |
| SubTopics      | ✅ PASS |
| Tests          | ✅ PASS |
| Questions      | ✅ PASS |

---

## Verification

Validated:

* Request Payloads
* Response Payloads
* JWT Authentication
* Refresh Token Rotation
* MongoDB Persistence
* Publishing Workflow
* Error Handling

---

## Result

```text
Passed Routes : 100%

Failed Routes : 0

Status : Frontend Ready
```

---

# 📝 Logging

Example:

```text
[API LOG] POST /api/v1/tests | 201 | 52.341 ms
```

Logged Information:

* Route
* Method
* Status Code
* Execution Time

---

# 🐛 Troubleshooting

## MongoDB Connection Failed

```text
ECONNREFUSED
```

Verify:

```env
MONGODB_URI
```

---

## Invalid JWT

```text
Authentication required
```

Verify:

```env
ACCESS_TOKEN_SECRET
```

---

## Refresh Token Failure

Verify:

```text
refreshToken exists in database

refreshToken cookie exists

refreshToken secrets match
```

---

## CORS Errors

Verify:

```env
CORS_ORIGIN
```

---

# ✅ Backend Status

Authentication ............ Complete

Subject Hierarchy ......... Complete

Topic Hierarchy ........... Complete

SubTopic Hierarchy ........ Complete

Test Management ........... Complete

Question Management ....... Complete

Publishing Workflow ....... Complete

Refresh Token Rotation .... Complete

Metrics Collection ........ Complete

Insights Export ........... Complete

API Testing ............... Complete

---

## Final Status

✅ Stable Backend API

✅ API V1 Complete

✅ Frontend Integration Ready


---

**Version:** 1.0.0

**Last Updated:** June 2026

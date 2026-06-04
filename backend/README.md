# TestDash Backend API

A robust and scalable Node.js/Express backend service for the TestDash application - a comprehensive online testing platform for creating, managing, and taking quizzes.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

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

## ✨ Features

- ✅ **JWT Authentication** - Secure token-based authentication
- ✅ **Role-Based Access Control** - Support for different user roles
- ✅ **Input Validation** - Comprehensive request validation
- ✅ **Error Handling** - Standardized error responses
- ✅ **MongoDB Integration** - Document-based data persistence
- ✅ **Middleware Pipeline** - Request processing and validation
- ✅ **Async Utilities** - Promise-based request handling
- ✅ **CORS Support** - Cross-origin resource sharing
- ✅ **Request Logging** - Morgan HTTP request logger
- ✅ **Environment Configuration** - Secure environment variable management

---

## 🛠️ Technology Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Runtime** | Node.js | 18+ |
| **Framework** | Express.js | 4.x |
| **Database** | MongoDB | 5.0+ |
| **Authentication** | JWT (jsonwebtoken) | 9.x |
| **Password Hashing** | bcrypt | 5.x |
| **Validation** | Custom middleware | - |
| **HTTP Logger** | Morgan | 1.x |
| **Environment** | dotenv | 16.x |
| **CORS** | cors | 2.x |

---

## 📦 Prerequisites

Before running the application, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v8 or higher) - Comes with Node.js
- **MongoDB** (Local or Cloud) - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or local instance
- **Git** - Version control [Download](https://git-scm.com/)

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
- Validation and middleware utilities

### 3. Verify Installation

```bash
npm list --depth=0
```

---

## 🔐 Environment Configuration

Create a `.env` file in the `backend` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/testdash
# For MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/testdash

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRY=7d

# CORS Configuration
CLIENT_URL=http://localhost:5173

# API Configuration
API_VERSION=v1
LOG_LEVEL=debug
```

### Environment Variables Explanation

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Runtime environment | `development` \| `production` |
| `MONGODB_URI` | Database connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | JWT signing secret (change in production!) | `your_secret_key` |
| `JWT_EXPIRY` | Token expiration time | `7d` \| `24h` |
| `CLIENT_URL` | Frontend URL for CORS | `http://localhost:5173` |

---

## ▶️ Running the Application

### Development Mode (with auto-reload)

```bash
npm run dev
```

The server starts on `http://localhost:5000` with hot-reload enabled.

### Production Mode

```bash
npm start
```

### Run Tests (if configured)

```bash
npm test
```

### Check Linting

```bash
npm run lint
```

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── app.js                    # Express app initialization
│   ├── server.js                 # Server entry point
│   │
│   ├── config/
│   │   └── database.js           # MongoDB connection configuration
│   │
│   ├── constants/
│   │   ├── config.js             # Application constants
│   │   └── uxErrors.js           # User-friendly error messages
│   │
│   ├── controllers/              # Route handlers and business logic
│   │   ├── auth.controller.js
│   │   ├── test.controller.js
│   │   ├── question.controller.js
│   │   └── ...
│   │
│   ├── models/                   # Database schemas and models
│   │   ├── user.model.js
│   │   ├── test.model.js
│   │   └── ...
│   │
│   ├── services/                 # Business logic layer
│   │   ├── auth.service.js
│   │   ├── test.service.js
│   │   └── ...
│   │
│   ├── middlewares/              # Express middleware
│   │   ├── auth.middleware.js    # JWT verification
│   │   ├── errorHandler.js       # Global error handling
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
│   │
│   └── insights/                 # Analytics and data insights
│       └── insights.json
│
├── .env                          # Environment variables (gitignored)
├── .env.example                  # Example environment template
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Locked dependency versions
└── README.md                     # This file
```

### Directory Purposes

- **controllers/** - Handle HTTP requests and responses
- **models/** - Define MongoDB schemas
- **services/** - Encapsulate business logic
- **middlewares/** - Request processing (auth, validation, error handling)
- **routers/** - Map routes to controllers
- **utils/** - Reusable helper functions
- **constants/** - Application-wide constants

---

## 🔌 API Documentation

### Authentication Endpoints

#### Register New User
```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123",
  "fullName": "John Doe"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "507f1f77bcf86cd799439011",
      "email": "user@example.com",
      "fullName": "John Doe"
    },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

#### Login
```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

#### Get Current User
```http
GET /api/v1/auth/me
Authorization: Bearer <token>
```

#### Logout
```http
POST /api/v1/auth/logout
Authorization: Bearer <token>
```

### Test Endpoints

#### Get All Tests
```http
GET /api/v1/tests
Authorization: Bearer <token>
```

#### Get Test by ID
```http
GET /api/v1/tests/:id
Authorization: Bearer <token>
```

#### Create Test
```http
POST /api/v1/tests
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Mathematics Quiz",
  "category": "Math",
  "difficulty": "medium",
  "totalQuestions": 10,
  "totalMarks": 100,
  "totalTime": 60
}
```

#### Update Test
```http
PUT /api/v1/tests/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Updated Quiz Name",
  "status": "published"
}
```

### Questions Endpoints

#### Create Questions (Bulk)
```http
POST /api/v1/questions/bulk
Authorization: Bearer <token>
Content-Type: application/json

{
  "questions": [
    {
      "question": "What is 2+2?",
      "option1": "3",
      "option2": "4",
      "option3": "5",
      "option4": "6",
      "correctOption": "option2"
    }
  ],
  "testId": "507f1f77bcf86cd799439011"
}
```

### Subject & Topic Endpoints

#### Get All Subjects
```http
GET /api/v1/subjects
Authorization: Bearer <token>
```

#### Get Topics by Subject
```http
GET /api/v1/topics/subject/:subjectId
Authorization: Bearer <token>
```

#### Get SubTopics by Topic
```http
GET /api/v1/sub-topics/topic/:topicId
Authorization: Bearer <token>
```

---

## 🔐 Authentication

### JWT (JSON Web Tokens)

The API uses JWT for stateless authentication:

1. **Token Generation**: User receives JWT after login
2. **Token Storage**: Frontend stores token in memory/localStorage
3. **Token Verification**: Auth middleware validates token on protected routes
4. **Token Refresh**: Implement refresh token mechanism for longer sessions

### Auth Middleware Flow

```
Request → Auth Header → Extract Token → Verify JWT → Attach User → Next Middleware
```

### Protected Routes

All routes starting with `/api/v1/` (except auth endpoints) require valid JWT:

```javascript
// Protected route example
router.get("/dashboard", authMiddleware, (req, res) => {
  // req.user contains decoded JWT payload
  res.json({ user: req.user });
});
```

---

## ⚠️ Error Handling

### Standardized Error Response

All errors follow this format:

```json
{
  "success": false,
  "message": "User-friendly error message",
  "statusCode": 400,
  "errors": [
    {
      "field": "email",
      "message": "Email is required"
    }
  ]
}
```

### HTTP Status Codes

| Code | Meaning | Example |
|------|---------|---------|
| `200` | OK | Successful request |
| `201` | Created | Resource created successfully |
| `400` | Bad Request | Invalid input data |
| `401` | Unauthorized | Missing or invalid token |
| `403` | Forbidden | User lacks permission |
| `404` | Not Found | Resource not found |
| `500` | Server Error | Internal server error |

### Common Error Messages

- `"Invalid credentials"` - Wrong email or password
- `"Email already exists"` - User already registered
- `"Unauthorized access"` - Invalid or expired token
- `"Test not found"` - Referenced test doesn't exist
- `"Server error occurred"` - Internal server issue

---

## 🗄️ Database

### MongoDB Collections

#### Users Collection
```javascript
{
  _id: ObjectId,
  email: String,
  fullName: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

#### Tests Collection
```javascript
{
  _id: ObjectId,
  name: String,
  category: String,
  difficulty: String, // "easy" | "medium" | "hard"
  status: String,     // "draft" | "published" | "archived"
  totalQuestions: Number,
  totalMarks: Number,
  totalTime: Number,   // in minutes
  createdBy: ObjectId, // Reference to User
  createdAt: Date,
  updatedAt: Date
}
```

#### Questions Collection
```javascript
{
  _id: ObjectId,
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  correctOption: String,
  testId: ObjectId,    // Reference to Test
  createdAt: Date
}
```

### Indexing Strategy

Create indexes for frequently queried fields:

```bash
# In MongoDB shell
db.users.createIndex({ "email": 1 }, { unique: true })
db.tests.createIndex({ "createdBy": 1 })
db.questions.createIndex({ "testId": 1 })
db.topics.createIndex({ "subjectId": 1 })
```

---

## 📝 Logging

The application uses Morgan for HTTP request logging:

```
[timestamp] METHOD /api/route HTTP/1.1 STATUS_CODE - RESPONSE_TIME ms
```

Log levels in development:
- `debug` - Detailed debugging information
- `info` - General informational messages
- `warn` - Warning messages
- `error` - Error messages

---

## 🤝 Contributing

### Development Workflow

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Your Changes**
   - Follow the existing code structure
   - Add comments for complex logic
   - Write meaningful commit messages

3. **Test Your Changes**
   ```bash
   npm test
   ```

4. **Submit a Pull Request**
   - Describe changes clearly
   - Reference related issues
   - Ensure all tests pass

### Code Standards

- **Style**: Follow existing code patterns
- **Naming**: Use camelCase for variables/functions
- **Structure**: Keep functions focused and single-responsibility
- **Errors**: Use custom error handling (apiError.js)
- **Validation**: Validate all user inputs

---

## 🐛 Troubleshooting

### Common Issues

#### MongoDB Connection Failed
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Ensure MongoDB is running locally or update `MONGODB_URI` in `.env`

#### JWT Token Expired
```
Error: jwt expired
```
**Solution**: User needs to login again to get a new token

#### CORS Errors
```
Error: Access to XMLHttpRequest blocked by CORS policy
```
**Solution**: Update `CLIENT_URL` in `.env` to match frontend URL

#### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution**: Change `PORT` in `.env` or kill process using port 5000

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [JWT Guide](https://jwt.io/introduction)
- [RESTful API Best Practices](https://restfulapi.net/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**TestDash Development Team**

For questions or support, please contact the development team or open an issue on GitHub.

---

**Last Updated:** June 2026  
**Version:** 1.0.0

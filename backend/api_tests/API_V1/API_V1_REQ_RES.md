# API_V1_TEST_RESULTS.md

## Overview

This document contains actual tested request and response samples for API Version 1.

---

# Health Module

## Check Server Health

### Request

**Method:** GET

**Endpoint**

```http
/api/v1/health
```

### Response

```json
{
  "message": "Server is healthy"
}
```

---

# Authentication Module

## Register User

### Request

**Method:** POST

**Endpoint**

```http
/api/v1/auth/register
```

**Body**

```json
{
  "userId": "vedant-admin",
  "fullName": "Vedant Admin",
  "email": "vedant@example.com",
  "password": "vedant123"
}
```

### Response

```json
{
  "statusCode": 201,
  "success": true,
  "data": {
    "_id": "6a241310ebcc481795da98fc",
    "userId": "vedant-admin",
    "email": "vedant@example.com",
    "fullName": "Vedant Admin",
    "createdAt": "2026-06-06T12:31:12.881Z",
    "updatedAt": "2026-06-06T12:31:12.881Z",
    "__v": 0
  },
  "message": "User registered successfully."
}
```

---

## Login User

### Request

**Method:** POST

**Endpoint**

```http
/api/v1/auth/login
```

**Body**

```json
{
  "identifier": "vedant-admin",
  "password": "vedant123"
}
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {
    "user": {
      "_id": "6a241310ebcc481795da98fc",
      "userId": "vedant-admin",
      "email": "vedant@example.com",
      "fullName": "Vedant Admin"
    },
    "accessToken": "<jwt-token>"
  },
  "message": "Login successful."
}
```

---

## Get Current User

### Request

**Method:** GET

**Endpoint**

```http
/api/v1/auth/me
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {
    "_id": "6a241310ebcc481795da98fc",
    "userId": "vedant-admin",
    "email": "vedant@example.com",
    "fullName": "Vedant Admin"
  },
  "message": "Profile fetched successfully."
}
```

---

## Refresh Access Token

### Request

**Method:** POST

**Endpoint**

```http
/api/v1/auth/refresh-token
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {
    "accessToken": "<new-jwt-token>"
  },
  "message": "Authenticated."
}
```

---

## Logout User

### Request

**Method:** POST

**Endpoint**

```http
/api/v1/auth/logout
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {},
  "message": "Logout successful."
}
```

---

# Subject Module

## Create Subject

### Request

```json
{
  "name": "Python Programming"
}
```

### Response

```json
{
  "statusCode": 201,
  "success": true,
  "data": {
    "name": "Python Programming",
    "_id": "6a241516a0112f6131ecbbc3"
  },
  "message": "Subject created successfully."
}
```

---

## Get Subject By Id

### Request

```http
GET /api/v1/subjects/:id
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {
    "_id": "6a241516a0112f6131ecbbc3",
    "name": "Python Programming"
  },
  "message": "Subject fetched successfully."
}
```

---

## Update Subject

### Request

```json
{
  "name": "Programming with Python"
}
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {
    "_id": "6a241516a0112f6131ecbbc3",
    "name": "Programming with Python"
  },
  "message": "Subject updated successfully."
}
```

---

## Delete Subject

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": {},
  "message": "Subject deleted successfully."
}
```

---

# Topic Module

(Create Topic, Get Topic, Update Topic, Delete Topic, Get Topics By Subject)

Use the exact tested request/response samples from Postman.

---

# SubTopic Module

(Create SubTopic, Get SubTopic, Update SubTopic, Delete SubTopic, Get SubTopics By Topic)

Use the exact tested request/response samples from Postman.

---

# Test Module

## Create Immediate Test

Request:

```json
{
  "name": "Interview Preparation",
  "category": "mockTest",
  "subjectId": "{{subject_id}}",
  "topics": [
    "{{topic_id}}"
  ],
  "subTopics": [
    "{{subTopic_id}}"
  ],
  "difficulty": "easy",
  "correctMarks": 2,
  "wrongMarks": -1,
  "totalTime": 60,
  "totalMarks": 50,
  "totalQuestions": 25,
  "publishMode": "immediate"
}
```

Response:

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Test created successfully."
}
```

---

## Create Scheduled Test

Request:

```json
{
  "name": "scheduled test 1",
  "category": "pyq",
  "publishMode": "scheduled",
  "scheduledAt": "2026-06-15T14:09:03.806Z"
}
```

Response:

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Test created successfully."
}
```

---

## Create Scheduled Test With Availability Window

Request:

```json
{
  "name": "scheduled test 5",
  "publishMode": "scheduled",
  "availabilityDays": 3,
  "scheduledAt": "2026-06-15T14:09:03.806Z"
}
```

Response:

```json
{
  "statusCode": 201,
  "success": true,
  "message": "Test created successfully."
}
```

---

## Get Test By Id

(Insert tested response)

---

## Get All Tests

Response omitted due to size.

See:

```text
docs/testing/get_all_tests.json
```

Contains complete populated response with live and scheduled tests.

---

## Delete Test

```json
{
  "statusCode": 200,
  "success": true,
  "data": {},
  "message": "Test deleted successfully."
}
```

---

# Question Module

## Save Questions

### Request

```json
{
  "testId": "6a24294889257e7db09bb83c",
  "questions": [
    {
      "topicId": "6a2422991e15140e6f082591",
      "subTopicId": "6a2422db669389379f0b45e6",
      "type": "mcq",
      "question": "What is 2 + 2 ?",
      "option1": "1",
      "option2": "2",
      "option3": "3",
      "option4": "4",
      "correctOption": "option4",
      "difficulty": "easy",
      "explanation": "2 + 2 = 4"
    }
  ]
}
```

### Response

```json
{
  "statusCode": 200,
  "success": true,
  "data": [
    {
      "_id": "6a2433ab44c39c5200e8d60c",
      "question": "What is 2 + 2 ?",
      "correctOption": "option4"
    }
  ],
  "message": "Questions saved successfully."
}
```

---

# Notes

* Authentication uses Access Token + Refresh Token rotation.
* Refresh token is stored in HttpOnly cookies.
* Test statuses are synchronized automatically through scheduled status sync logic.
* Questions are saved in bulk and replace existing test questions on every save.
* PATCH is used for all update operations.

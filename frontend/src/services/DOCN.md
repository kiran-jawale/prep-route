# Services Documentation

## Purpose

The services folder contains API communication logic.

---

## Files

| File                | Purpose                      |
| ------------------- | ---------------------------- |
| axios.ts            | Axios instance configuration |
| auth.service.ts     | Authentication requests      |
| subject.service.ts  | Subject requests             |
| topic.service.ts    | Topic requests               |
| subTopic.service.ts | SubTopic requests            |
| test.service.ts     | Test requests                |
| question.service.ts | Question requests            |

---

## Responsibilities

- API requests
- Response handling
- Endpoint abstraction

---

## Notes

Components never call Axios directly.
Always use service files.

---

## axios.ts

### API Client

| Item | Purpose |
|--------|--------|
| AxiosRequestConfig.metadata | Request timing metadata |
| AxiosRequestConfig._retry | Refresh token retry flag |

---

## auth.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| register | POST /auth/register | RegisterPayload |
| login | POST /auth/login | LoginPayload |
| logout | POST /auth/logout | None |
| getCurrentUser | GET /auth/me | None |
| refreshToken | POST /auth/refresh-token | None |

---

## question.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| bulkCreate | POST /questions/bulk | Bulk Question Payload |

---

## subject.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| getAll | GET /subjects | None |
| getById | GET /subjects/:id | id |
| create | POST /subjects | CreateSubjectPayload |
| update | PATCH /subjects/:id | CreateSubjectPayload |
| delete | DELETE /subjects/:id | id |

---

## topic.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| getBySubject | GET /topics/subject/:subjectId | subjectId |
| getById | GET /topics/:id | id |
| create | POST /topics | CreateTopicPayload |
| update | PATCH /topics/:id | CreateTopicPayload |
| delete | DELETE /topics/:id | id |

---

## subTopic.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| getByTopic | GET /sub-topics/topic/:topicId | topicId |
| getById | GET /sub-topics/:id | id |
| create | POST /sub-topics | CreateSubTopicPayload |
| update | PATCH /sub-topics/:id | CreateSubTopicPayload |
| delete | DELETE /sub-topics/:id | id |

---

## test.service.ts

### Methods

| Method | Endpoint | Payload |
|----------|----------|----------|
| getById | GET /tests/:id | id |
| getAll | GET /tests?page&limit | page, limit |
| getDashboardStats | GET /tests/dashboard-stats | None |
| create | POST /tests | CreateTestPayload |
| update | PATCH /tests/:id | CreateTestPayload |
| delete | DELETE /tests/:id | id |
| updateMarkingScheme | PATCH /tests/:id/marking-scheme | Marking Scheme Payload |

---
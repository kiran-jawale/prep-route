# Types Documentation

## Purpose

This folder contains application TypeScript types definitions.

---

## Files

| File               | Purpose               |
| ------------------ | --------------------- |
| auth.types.ts      | Authentication specific types |
| dashboard.types.ts | Dashboard specific types      |
| publish.types.ts   | Publishing specific types     |
| question.types.ts  | Question specific types       |
| subject.types.ts   | Subject specific types        |
| subTopic.types.ts  | SubTopic specific types       |
| test.types.ts      | Test specific types           |
| toast.types.ts     | Toast specific types          |
| topic.types.ts     | Topic specific types          |

---

## Responsibilities

* Shared interfaces
* Shared types
* API payload contracts
* Component contracts

---

## auth.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| User | Authenticated user information |
| AuthState | Redux authentication state |
| LoginPayload | Login request payload |
| RegisterPayload | Registration request payload |
| AuthResponse | Authentication API response |

---

## dashboard.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| DashboardFilter | Dashboard filter values |
| DashboardStats | Dashboard statistics model |

---

## publish.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| PublishMode | Publish mode selection |
| AvailabilityMode | Test availability options |
| PublishForm | Publish workflow form model |

---

## question.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| OptionKey | MCQ option identifiers |
| Question | Question entity model |

---

## subject.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| Subject | Subject entity model |
| CreateSubjectPayload | Subject creation payload |

---

## subTopic.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| SubTopic | SubTopic entity model |
| CreateSubTopicPayload | SubTopic creation payload |

---

## test.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| TestStatus | Test lifecycle states |
| TestCategory | Test category values |
| TestSubject | Populated subject model |
| TestTopic | Populated topic model |
| Test | Test entity model |
| CreateTestPayload | Test creation payload |

---

## toast.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| ToastType | Toast message categories |
| Toast | Toast notification model |

---

## topic.types.ts

| Type / Interface | Purpose |
|------------------|----------|
| Topic | Topic entity model |
| CreateTopicPayload | Topic creation payload |
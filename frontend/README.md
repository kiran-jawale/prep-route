# PrepRoute Frontend

A modern React + TypeScript frontend for creating, managing, publishing, and tracking MCQ-based tests through a structured Subject → Topic → SubTopic hierarchy.

---

# 📋 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
  * [Authentication](#authentication)
  * [Subject Hierarchy](#subject-hierarchy)
  * [Test Management](#test-management)
  * [Question Management](#question-management)
  * [Publishing Workflow](#publishing-workflow)
  * [Tracking Workflow](#tracking-workflow)
* [Technology Stack](#-technology-stack)
* [Architecture](#-architecture)
* [Prerequisites](#-prerequisites)
* [Installation](#-installation)
* [Environment Configuration](#-environment-configuration)
* [Running the Application](#️-running-the-application)
* [Project Structure](#-project-structure)
* [Directory Purposes](#-directory-purposes)
* [State Management](#-state-management)
* [Context Architecture](#-context-architecture)
* [Service Layer](#-service-layer)
* [Authentication](#-authentication)
* [Dashboard Module](#-dashboard-module)
* [Test Management Module](#-test-management-module)
* [Question Management Module](#-question-management-module)
* [Publishing Workflow](#-publishing-workflow)
* [Tracking Workflow](#-tracking-workflow)
* [Draft Persistence](#-draft-persistence)
* [Error Handling](#-error-handling)
* [Performance Optimizations](#-performance-optimizations)
* [Frontend Status](#-frontend-status)

---

# 🎯 Overview

PrepRoute Frontend is a single-page React application designed for educators and content creators to build and manage MCQ-based examinations.

The application supports:

* Authentication
* Test Creation
* Test Editing
* Draft Persistence
* Question Management
* Bulk Question Import
* Publishing
* Scheduling
* Tracking

The entire workflow follows:

Login -> Dashboard -> Create Test -> Add Questions -> Publish -> Track Status

The frontend consumes API V1 and provides a complete user interface for all currently available backend capabilities.

---

# ✨ Features

## Authentication

✅ Login

✅ Registration

✅ Protected Routes

✅ Persistent Sessions

✅ Refresh Token Handling

✅ Automatic Reauthentication

---

## Subject Hierarchy

✅ Subject Listing

✅ Topic Listing

✅ SubTopic Listing

✅ Dynamic Subject → Topic Loading

✅ Dynamic Topic → SubTopic Loading

---

## Test Management

✅ Create Test

✅ Edit Test

✅ Draft Workflow

✅ Difficulty Selection

✅ Category Selection

✅ Marking Scheme Configuration

✅ Subject Selection

✅ Topic Selection

✅ SubTopic Selection

✅ Validation

---

## Question Management

✅ Rich Text Question Editor

✅ Rich Text Explanation Editor

✅ Question Navigation

✅ Question Completion Tracking

✅ Draft Persistence

✅ CSV Import

✅ Marking Scheme Updates

---

## Publishing Workflow

✅ Publish Now

✅ Schedule Publish

✅ Expiry Configuration

✅ Publish Validation

✅ Publish Summary

---

## Tracking Workflow

✅ Draft Tracking

✅ Scheduled Tracking

✅ Live Tracking

✅ Expired Tracking

✅ Lifecycle Visualization

---

## Dashboard

✅ Statistics

✅ Recent Tests

✅ Infinite Scroll Pagination

✅ Search

✅ Filters

✅ Status Cards

---

# 🛠 Technology Stack

| Category         | Technology    |
| ---------------- | ------------- |
| Framework        | React 19      |
| Language         | TypeScript    |
| Build Tool       | Vite          |
| Routing          | React Router  |
| State Management | Redux Toolkit |
| HTTP Client      | Axios         |
| Styling          | Tailwind CSS  |
| Animations       | Framer Motion |
| Validation       | Zod           |
| CSV Parsing      | Papa Parse    |
| Rich Text Editor | TinyMCE       |
| Icons            | Lucide React  |

---

# 🏗 Architecture

The frontend follows a modular feature-driven architecture.

```text
User
  │
  ▼
Route
  │
  ▼
Page
  │
  ▼
Components
  │
  ▼
Context / Redux
  │
  ▼
Services
  │
  ▼
Backend API
```

### Route Layer

Handles navigation and protected route access.

### Page Layer

Contains route-specific business workflows.

### Component Layer

Contains reusable UI and feature components.

### Context Layer

Provides workflow state and UI state.

### Redux Layer

Stores authentication and persisted draft data.

### Service Layer

Handles API communication and response processing.

---

# 📦 Prerequisites

Before running the application ensure:

* Node.js
* npm
* Running Backend API

---


# 🚀 Installation

Clone repository:

```bash
git clone <repository-url>
```

Move into frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Environment Configuration

Create:

```env
.env
```

Example:

```env
VITE_API_URL=http://localhost:7500/api/v1
```

---

# ▶️ Running the Application

Development:

```bash
npm run dev
```

Production Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## 📚 Internal Module Documentation

In addition to this README, each major source folder contains a dedicated `_DOCN.md` file.

These documents provide module-level implementation details including:

* Component props
* Interfaces
* Type definitions
* Context contracts
* Hook contracts
* Service endpoints
* Utility contracts
* Redux state definitions

Documentation files exist inside:

```text
components/_DOCN.md
contexts/_DOCN.md
hooks/_DOCN.md
pages/_DOCN.md

services/_DOCN.md
state/_DOCN.md
types/_DOCN.md
utils/_DOCN.md
```

Purpose:

* Keep README focused on architecture and workflows.
* Keep implementation contracts close to source code.
* Simplify onboarding and maintenance.
* Avoid large monolithic documentation files.

```

---

---

# 📁 Project Structure

```text
frontend/
├── public/
│   ├── auth.png
│   └── company-logo.png
│
├── src/
│   ├── main.tsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── shared/
│   │   └── ui/
│   │
│   ├── constants/
│   │   ├── config.ts
│   │   ├── routes.ts
│   │   └── storage.ts
│   │
│   ├── contexts/
│   │   ├── domContext.tsx
│   │   ├── testContext.tsx
│   │   └── themeContext.tsx
│   │
│   ├── hooks/
│   │   ├── useTestForm.ts
│   │   └── useWorkflowTest.ts
│   │
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   ├── doc/
│   │   ├── layout/
│   │   ├── publish/
│   │   ├── question/
│   │   ├── test/
│   │   ├── tracking/
│   │   └── not-found/
│   │
│   ├── services/
│   │   ├── axios.ts
│   │   └── ...
│   │
│   ├── state/
│   │   ├── store.ts
│   │   └── slices/
│   │
│   ├── types/
│   │
│   └── utils/
│       ├── csvParser.ts
│       ├── currentTest.ts
│       ├── questionFactory.ts
│       ├── rememberTest.ts
│       └── validation.ts
│
├── .env
├── package.json
├── vite.config.ts
└── README.md
```

### Directory Purposes

#### components/

Contains reusable UI and business components shared across multiple modules.

#### constants/

Application-wide configuration, route definitions, and storage keys.

#### contexts/

Global React Context providers responsible for modal handling, test workflows, and application-level state.

#### hooks/

Reusable business logic hooks extracted from page components.

#### pages/

Feature modules responsible for rendering route-level screens.

#### services/

Centralized API communication layer built on top of Axios.

#### state/

Redux Toolkit store and application slices.

#### types/

Shared TypeScript interfaces and domain models.

#### utils/

Framework-independent helper functions, validation logic, CSV processing, and draft persistence utilities.

---

# 🧩 Shared UI Library

Reusable UI primitives used across all modules.

Examples:

* Button
* Input
* TextArea
* Select
* MultiSelect
* Card
* Badge
* Loader
* Container

Purpose:

* Consistent UI
* Reduced duplication
* Faster feature development

---

# 🔁 Shared Components

Reusable business components.

Examples:

* SearchBar
* StatusBadge
* StatCard
* ConfirmModal
* TestSummaryCard
* BreadCrumb


Purpose:

* Workflow consistency
* Reusable business UI

---

# 🏛 Layout Architecture

Layout is composed of:

Sidebar

-> Header

-> Inner Navigation

-> Page Content

Implemented Layout Components:

* Sidebar
* Header
* DashboardNav
* QuestionNav
* InnerSidebar

---

# 🧠 State Management

Redux is used for:

Authentication

Remembered Tests

Global User State

Slices:

```text
authSlice

rememberSlice
```

Benefits:

* Predictable state
* Persistence support
* Reduced prop drilling

---

# 🌐 Context Architecture

## DomContext

Handles:

* Toasts
* Modals
* Global UI interactions

---

## TestContext

Handles:

* Current Test
* Current Questions
* Active Question
* Topics
* SubTopics
* Completion Tracking

---

## ThemeContext

Application-level theme support.

---

# 🔌 Service Layer

Frontend API communication is centralized.

Services:

```text
auth.service.ts

subject.service.ts

topic.service.ts

subTopic.service.ts

test.service.ts

question.service.ts
```

Responsibilities:

* API requests
* Payload normalization
* Response handling

---

# 🔐 Authentication

Authentication flow:

Register

-> Login

-> Access Token

-> Protected Routes

-> Refresh Token

-> Session Persistence

Protected pages cannot be accessed without authentication.

---

# 💾 Draft Persistence

Implemented through:

Redux

*

Local Storage

Features:

* Save Draft
* Resume Draft
* Edit Existing Draft
* Workflow Restoration

Utilities:

```text
rememberTest.ts

currentTest.ts

localStorage.ts
```

---

# 📊 Dashboard Module

Features:

* Statistics Overview
* Recent Tests
* Search
* Filters
* Infinite Scroll

Optimizations:

* useMemo
* useCallback
* Infinite Loading

---

# 📝 Test Management Module

Features:

* Create Test
* Edit Test
* Validation
* Dynamic Hierarchy Loading

Sections:

* Details
* Difficulty
* Marks
* Subject Selection

Workflow:

Create Test

-> Save Draft

-> Questions

-> Publish

---

# ❓ Question Management Module

Features:

* Rich Text Editing
* Navigation
* Validation
* CSV Import
* Draft Save

Modals:

* QuestionMarkingSchemeModal
* QuestionCsvImportModal

Workflow:

Create Question

-> Validate

-> Save Draft

-> Submit Questions

---

# 📤 Publishing Workflow

Publish Modes:

Immediate Publish

Scheduled Publish

Availability Modes:

Always Available

Expiry Based

Workflow:

Draft

-> Publish

-> Live

-> Expired

---

# 📈 Tracking Workflow

Tracks complete lifecycle.

States:

Draft

Scheduled

Live

Expired

Purpose:

* Progress visibility
* Workflow monitoring

---

# ⚠ Error Handling

Implemented Through:

* Zod Validation
* Toast Notifications
* Confirm Modals
* Error Boundaries

Provides:

* User-friendly messages
* Validation feedback
* Safe workflow protection

---

# ⚡ Performance Optimizations

Implemented:

✅ Infinite Scroll

✅ Dashboard Pagination

✅ Memoized Filtering

✅ Memoized Callbacks

✅ Component Decomposition

✅ Shared UI Library

✅ Service Abstraction

✅ Context Separation

Benefits:

* Reduced Re-renders
* Better Scalability
* Cleaner Architecture

---

## Final Status

✅ Frontend V1 Complete

✅ API V1 Fully Integrated

✅ Production-Ready Architecture

✅ Documentation Ready

**Version:** 1.0.0

**Last Updated:** June 2026

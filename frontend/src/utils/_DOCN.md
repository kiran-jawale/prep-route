# Utilities Documentation

## Purpose

The utils folder contains reusable helper functions and utilities.

---

## Files

| File               | Purpose                         |
| ------------------ | ------------------------------- |
| csvParser.ts       | CSV parsing and validation      |
| currentTest.ts     | Current workflow test utilities that interacts with test workflow context |
| localStorage.ts    | Local storage helpers           |
| questionFactory.ts | Question object generation      |
| rememberTest.ts    | Draft persistence utilities that interacts with redux states    |
| validation.ts      | Zod validation schemas          |

---

## Responsibilities

* Reusable helpers
* Validation
* Data transformation
* Local storage abstraction

---

## csvParser.ts

### Interfaces

| Interface | Purpose |
|------------|----------|
| ParsedCsvQuestion | CSV row structure used during import |

### Functions

| Function | Purpose |
|----------|----------|
| parseCsvFile | Parse and validate imported CSV files |

---

## currentTest.ts

### Interfaces

| Interface | Purpose |
|------------|----------|
| CurrentTestStorage | Workflow persistence model used by TestContext |

### Functions

| Function | Purpose |
|----------|----------|
| saveCurrentTest | Persist active workflow state |
| getCurrentTest | Restore workflow state |
| clearCurrentTest | Clear persisted workflow state |

---

## localStorage.ts

### Functions

| Function | Purpose |
|----------|----------|
| getStorage | Retrieve typed value from local storage |
| setStorage | Store value in local storage |
| removeStorage | Remove value from local storage |

---

## questionFactory.ts

### Functions

| Function | Purpose |
|----------|----------|
| createEmptyQuestion | Generate default question object |

---

## rememberTest.ts

### Functions

| Function | Purpose |
|----------|----------|
| saveRememberedTests | Persist remembered drafts |
| getRememberedTests | Retrieve all remembered drafts |
| getRememberedTest | Retrieve specific remembered draft |

---

## validation.ts

### Schemas

| Schema | Purpose |
|----------|----------|
| loginSchema | Login form validation |
| registerSchema | Registration form validation |
| testSchema | Test form validation |
| questionSchema | Question form validation |

### Types

| Type | Purpose |
|--------|----------|
| LoginFormData | Login schema inferred type |
| RegisterFormData | Registration schema inferred type |
| TestFormData | Test schema inferred type |
| QuestionFormData | Question schema inferred type |

---
# Contexts Documentation

## Purpose

The contexts folder contains React Context providers responsible for cross-module state management.

---

## Files

| File             | Purpose                       |
| ---------------- | ----------------------------- |
| domContext.tsx   | Toasts, notifications, modals |
| testContext.tsx  | Current test workflow state   |
| themeContext.tsx | Theme-related state           |

---

## Responsibilities

### DomContext

Handles:

* Toasts
* Notifications
* Modals

### TestContext

Handles:

* Current test
* Current questions
* Active question
* Topics
* SubTopics
* Test status tracking

### ThemeContext

Handles:

* Theme state
* Theme switching

---

## Types/Props Info

#### DomContext

### Main Provider Props

| Prop | Type |
|--------|--------|
| children | ReactNode |

### Interfaces

#### DomContextType

| Field | Type |
|---------|---------|
| addToast | (message: string, type?: ToastType) => void |
| modal | ReactNode |
| setModal | (content: ReactNode) => void |
| isNotificationsOpen | boolean |
| toggleNotifications | () => void |

---

## TestContext

### Main Provider Props

| Prop | Type |
|--------|--------|
| children | ReactNode |

### Interfaces

#### TestContextType

| Field | Type |
|---------|---------|
| test | Test \| null |
| setTest | (test: Test \| null) => void |
| questions | Question[] |
| setQuestions | (questions: Question[]) => void |
| activeQuestion | number \| null |
| setActiveQuestion | (question: number) => void |
| completedQuestions | number[] |
| setCompletedQuestions | (questions: number[]) => void |
| markQuestionCompleted | (questionNumber:number)=>void |
| resetTest | ()=>void |
| subjects | Subject[] |
| setSubjects | (subjects:Subject[])=>void |
| topics | Topic[] |
| setTopics | (topics:Topic[])=>void |
| subTopics | SubTopic[] |
| setSubTopics | (subTopics:SubTopic[])=>void |

---

## ThemeContext

### Main Provider Props

| Prop | Type |
|--------|--------|
| children | ReactNode |

### Interfaces

#### ThemeContextType

| Field | Type |
|---------|---------|
| theme | Theme |
| font | Font |
| toggleTheme | ()=>void |
| toggleFont | ()=>void |

### Types

#### Theme

| Value |
|---------|
| light |
| dark |

#### Font

| Value |
|---------|
| inter |
| poppins |

---
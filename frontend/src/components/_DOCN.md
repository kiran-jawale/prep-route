# Components Documentation

## Purpose

The components folder contains reusable presentation components used throughout the application.

Components are divided into two categories:

* Shared Components
* UI Components

---

## Folder Structure

```text
components/

shared/
ui/
```

---

## Shared Components

Shared components represent reusable business-oriented UI blocks.

| File                | Purpose                                                 |
| ------------------- | ------------------------------------------------------- |
| BreadCrumb.tsx      | Options display - An alternative to radio buttons                           |
| ConfirmModal.tsx    | Confirmation dialog for destructive or workflow actions |
| ErrorBoundary.tsx   | React error boundary wrapper                            |
| SearchBar.tsx       | Search input component used in dashboard                |
| StatCard.tsx        | Dashboard statistic card                                |
| StatusBadge.tsx     | Test status indicator                                   |
| TestSummaryCard.tsx | Test information summary card                           |

---

## UI Components

UI components represent reusable design primitives.

| File                  | Purpose                     |
| --------------------- | --------------------------- |
| Button.tsx            | Standard action button      |
| Card.tsx              | Card container              |
| Container.tsx         | Page content wrapper        |
| Input.tsx             | Text input                  |
| Loader.tsx            | Loading indicator           |
| ModalContainer.tsx    | Global modal renderer       |
| MultiSelect.tsx       | Multiple selection dropdown |
| NotificationPanel.tsx | Notification drawer         |
| Select.tsx            | Single selection dropdown   |
| ToastContainer.tsx    | Toast renderer              |
| UserMenu.tsx          | User profile menu           |

---

## Responsibilities

* Visual consistency
* Design system implementation
* Reusable UI patterns
* Reduced duplication

---

## Notes

Components are presentation-focused.

Business logic remained inside:-
* Pages
* Hooks
* Contexts
* Services

---

## Component Props

### /shared

### BreadCrumb

| Prop | Type |
|--------|--------|
| items | string[] |

### ConfirmModal

| Prop | Type |
|--------|--------|
| title | string |
| message | string |
| onSave | () => void |
| onDiscard | () => void |
| onCancel | () => void |

### SearchBar

| Prop | Type |
|--------|--------|
| value | string |
| onChange | (value:string)=>void |
| placeholder | string |

### StatCard

| Prop | Type |
|--------|--------|
| title | string |
| value | string \| number |
| color | string |
| onClick | () => void |

### StatusBadge

| Prop | Type |
|--------|--------|
| status | draft \| scheduled \| live \| expired |

### TestSummaryCard

| Prop | Type |
|--------|--------|
| test | Test |

---

### /ui

### Badge

| Prop | Type |
|--------|--------|
| children | ReactNode |

### Button

| Prop | Type |
|--------|--------|
| children | ReactNode |
| loading | boolean |
| variant | primary \| secondary \| danger |

### Container

| Prop | Type |
|--------|--------|
| children | ReactNode |
| className | string |

### Input

| Prop | Type |
|--------|--------|
| props | InputHTMLAttributes<HTMLInputElement> |

### ModalContainer

| Prop | Type |
|--------|--------|
| isOpen | boolean |
| onClose | () => void |
| children | ReactNode |

### MultiSelect

| Prop | Type |
|--------|--------|
| values | string[] |
| options | Option[] |
| onChange | (values:string[])=>void |

#### Interfaces

##### Option

| Field | Type |
|---------|---------|
| label | string |
| value | string |

### Select

| Prop | Type |
|--------|--------|
| value | string |
| options | Option[] |
| onChange | (value:string)=>void |

#### Interfaces

##### Option

| Field | Type |
|---------|---------|
| label | string |
| value | string |

### ToastContainer

| Prop | Type |
|--------|--------|
| toasts | Toast[] |
| removeToast | (id:number)=>void |

### UserMenu

| Prop | Type |
|--------|--------|
| open | boolean |
| onClose | () => void |

---
# Hooks Documentation

## Purpose

The hooks folder contains reusable workflow and state logic.

---

## Files

| File               | Purpose                                     |
| ------------------ | ------------------------------------------- |
| useTestForm.ts     | Test creation and edit workflow logic       |
| useWorkflowTest.ts | Workflow restoration and workflow utilities |

---

## Responsibilities

* Shared workflow logic
* State abstraction
* Reusable behaviors

---

## useTestForm

### Props

| Prop | Type |
|--------|--------|
| testId | string \| null |

### Interfaces

#### Props

| Field | Type |
|---------|---------|
| testId | string \| null |

---

## useWorkflowTest

### Parameters

| Parameter | Type |
|------------|------------|
| testId | string |

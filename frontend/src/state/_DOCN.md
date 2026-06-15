# State Documentation

## Purpose

The state folder contains Redux configuration that interacts with localStorage.

---

## Files

| File             | Purpose                   |
| ---------------- | ------------------------- |
| store.ts         | Redux store configuration |
| authSlice.ts     | Authentication state      |
| rememberSlice.ts | Draft persistence state   |

---

## Responsibilities

* Global state management
* Authentication persistence
* Draft persistence

---

## Notes

Redux is used only for application-wide state.

---

## store.ts

### Types

| Type | Purpose |
|--------|----------|
| RootState | Global Redux state type |
| AppDispatch | Redux dispatch type |

---

## authSlice.ts

### State

| State | Purpose |
|--------|----------|
| AuthState | Authentication state container |

### Actions

| Action | Purpose |
|--------|----------|
| login | Store authenticated user |
| logout | Clear authenticated user |

---

## rememberSlice.ts

### Interfaces

| Interface | Purpose |
|------------|----------|
| RememberedTest | Persisted draft workflow model |
| RememberState | Redux draft state container |

### Actions

| Action | Purpose |
|--------|----------|
| rememberTest | Create or update remembered draft |
| forgetTest | Remove remembered draft |

---
// ============================================================================
// Toast Notification Types - Type-safe notification system
// ============================================================================

// Toast type - discriminated union for better type safety
export type ToastType = "success" | "error";

// Toast notification message
export interface Toast {
  id: number;
  message: string;
  type: ToastType; // Properly typed as union instead of string
}

// Toast function parameters - clearer typing for addToast function
export interface AddToastParams {
  message: string;
  type?: ToastType;
}

// Type guard to validate toast object
export const isToast = (data: unknown): data is Toast => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "message" in data &&
    "type" in data &&
    typeof data.id === "number" &&
    typeof data.message === "string" &&
    (data.type === "success" || data.type === "error")
  );
};
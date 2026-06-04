import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { Toast } from "../types/toast.types";

// ============================================================================
// ToastContainer Component - Notification display and management
// ============================================================================

// Props interface for ToastContainer
interface ToastContainerProps {
  toasts: Toast[];                   // Array of active toast notifications
  removeToast: (id: number) => void; // Callback to remove a toast by ID
}

/**
 * ToastContainer component - renders all active toasts
 * Positioned at bottom-right corner with smooth entrance/exit animations
 * Uses Framer Motion for animated notifications that slide in and out
 */
const ToastContainer: FC<ToastContainerProps> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            // Animate entrance: slide in from right, fade in
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            // Animate exit: scale down and fade out
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            className={`px-5 py-4 rounded-2xl shadow-2xl text-white flex items-center justify-between gap-5 min-w-[320px] ${
              // Success toasts are green, error toasts are red
              toast.type === "success" ? "bg-emerald-600" : "bg-red-600"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Icon for toast type - ✅ for success, ⚠️ for error */}
              <span>{toast.type === "success" ? "✅" : "⚠️"}</span>

              {/* Toast message text */}
              <span className="text-sm font-medium">{toast.message}</span>
            </div>

            {/* Close button to manually dismiss toast */}
            <button
              onClick={() => removeToast(toast.id)}
              className="text-xl hover:opacity-75 transition-opacity"
              type="button"
              aria-label="Close toast"
            >
              &times;
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastContainer;

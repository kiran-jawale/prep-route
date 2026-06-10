import { AnimatePresence, motion } from "framer-motion";

import type { Toast } from "../../types/toast.types";

interface Props {
  toasts: Toast[];

  removeToast: (id: number) => void;
}

export default function ToastContainer({ toasts, removeToast }: Props) {
  return (
    <div className="fixed right-5 top-5 z-[9999] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: 50,
            }}
            className={`
              flex    min-w-[280px] items-center  justify-between   rounded-xl
              px-4   py-3   text-white  shadow-lg
              ${toast.type === "success" ? "bg-emerald-500" : "bg-red-500"}
            `}
          >
            <span>{toast.message}</span>

            <button onClick={() => removeToast(toast.id)}>✕</button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

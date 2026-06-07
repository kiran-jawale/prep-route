import { AnimatePresence, motion } from "framer-motion";

import type { ReactNode } from "react";

interface Props {
  isOpen: boolean;

  onClose: () => void;

  children: ReactNode;
}

export default function ModalContainer({ isOpen, onClose, children }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/40
            p-6
          "
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
        >
          <motion.div
            className="
              w-full
              max-w-3xl
              rounded-3xl
              bg-white
              p-6
              shadow-xl
            "
            initial={{
              scale: 0.95,
            }}
            animate={{
              scale: 1,
            }}
            exit={{
              scale: 0.95,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

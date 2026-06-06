

// ModalContainer Component - Animated modal dialog

import type { FC, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";


interface ModalContainerProps {
  isOpen: boolean;  //should modal be visible
  onClose: () => void;  
  children: ReactNode;  // Modal content to display
}

/**
 * ModalContainer component - displays content in a centered overlay
 * Uses Framer Motion for smooth entrance/exit animations
 * Includes semi-transparent backdrop that closes modal when clicked
 */
const ModalContainer: FC<ModalContainerProps> = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop overlay with blur effect
        <motion.div
          // Fade in/out animation for backdrop
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={onClose}
          role="presentation"
        >
          {/* Modal content container */}
          <motion.div
            // Scale and fade animations for modal box
            initial={{
              scale: 0.95,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.95,
              opacity: 0,
            }}
            className="w-full max-w-4xl rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close button - top right corner */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-3xl text-zinc-400 hover:text-red-500 transition-colors"
              type="button"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal content area */}
            <div className="p-6 overflow-auto max-h-[calc(100vh-2rem)]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;

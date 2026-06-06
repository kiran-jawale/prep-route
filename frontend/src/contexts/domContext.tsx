import { createContext, useContext, useState } from "react";
import type {ReactNode} from 'react'

import type { Toast, ToastType } from "../types/toast.types";

import ToastContainer from "../components/ToastContainer";
import ModalContainer from "../components/ModalContainer";

// ============================================================================
// DOM Context - Type-safe notification and modal management
// ============================================================================

// Context value interface - defines what's available to consumers
interface DomContextType {
  addToast: (message: string, type?: ToastType) => void;
  modal: React.ReactNode;
  setModal: (content: React.ReactNode) => void;
}

// Provider props
interface DomProviderProps {
  children: ReactNode;
}

// Create context with proper typing instead of `any`
const DomContext = createContext<DomContextType | undefined>(undefined);

/**
 * DomProvider - central manager for notifications and dialogs
 * Provides toast notifications and modal dialogs with a simple API
 */
export const DomProvider = ({ children }: DomProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);      // Array of active toasts
  const [modal, setModal] = useState<ReactNode>(null);     // Currently displayed modal

  /**
   * Add a notification toast to appear at bottom-right corner
   * @param message - Text content to display
   * @param type - "success" (green) or "error" (red), defaults to "success"
   *
   * Toast auto-removes after 3 seconds unless manually dismissed
   */
  const addToast = (message: string, type: ToastType = "success"): void => {
    const id = Date.now(); // Use timestamp as unique ID

    // Add toast to list
    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    // Auto-remove after 3 seconds to prevent toast buildup
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  /**
   * Remove a toast by its ID
   * @param id - Unique identifier of toast to remove
   */
  const removeToast = (id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const value: DomContextType = {
    addToast,      // function to show a notification
    modal,         // current modal content (React node)
    setModal,      // function to set/open modal content
  };

  return (
    <DomContext.Provider value={value}>
      {children}

      {/* Container renders all active toasts */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      {/* Container renders the modal when modal state is not null */}
      <ModalContainer isOpen={!!modal} onClose={() => setModal(null)}>
        {modal}
      </ModalContainer>
    </DomContext.Provider>
  );
};

/**
 * Custom hook - use this to access toast and modal functions in components
 * Example: const { addToast, setModal } = useDom();
 *
 * Throws error if used outside DomProvider (good practice)
 */
export const useDom = (): DomContextType => {
  const context = useContext(DomContext);
  if (context === undefined) {
    throw new Error("useDom must be used within a DomProvider");
  }
  return context;
};

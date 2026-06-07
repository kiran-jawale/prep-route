import { createContext, useContext, useState } from "react";

import type { ReactNode } from "react";

import type { Toast, ToastType } from "../types/toast.types";

import ToastContainer from "../components/ToastContainer";
import ModalContainer from "../components/ModalContainer";

interface DomContextType {
  addToast: (message: string, type?: ToastType) => void;

  modal: ReactNode;

  setModal: (content: ReactNode) => void;
}

const DomContext = createContext<DomContextType | null>(null);

export const DomProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const [modal, setModal] = useState<ReactNode>(null);

  const addToast = (message: string, type: ToastType = "success") => {
    const id = Date.now();

    setToasts((prev) => [
      ...prev,
      {
        id,
        message,
        type,
      },
    ]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <DomContext.Provider
      value={{
        addToast,
        modal,
        setModal,
      }}
    >
      {children}

      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <ModalContainer isOpen={!!modal} onClose={() => setModal(null)}>
        {modal}
      </ModalContainer>
    </DomContext.Provider>
  );
};

export const useDom = () => {
  const context = useContext(DomContext);

  if (!context) {
    throw new Error("useDom must be used inside DomProvider");
  }

  return context;
};

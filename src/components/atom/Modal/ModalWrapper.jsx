import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext.jsx";

import Modal from "./Modal";

export default function ModalWrapper({ children }) {
  const [modalDataContext] = useContext(ModalContext);

  return (
    <>
      {children}
      <Modal
        type={modalDataContext.type}
        content={modalDataContext.content}
        isOpen={modalDataContext.isOpen}
      />
    </>
  );
}

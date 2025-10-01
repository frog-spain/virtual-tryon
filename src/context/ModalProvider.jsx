import React, { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalProvider = props => {
  const [modalDataContext, setModalDataContext] = useState({
    isOpen: false,
    content: null,
    type: "",
  });

  return (
    <ModalContext.Provider value={[modalDataContext, setModalDataContext]}>
      {props.children}
    </ModalContext.Provider>
  );
};

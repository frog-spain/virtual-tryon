import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext.jsx";

const ModalDemo = () => {
  const [_, setModalData] = useContext(ModalContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modal examples</h1>

      <div>
        <button
          className="option-button"
          onClick={() =>
            setModalData({
              isOpen: true,
              type: "info",
              content: "👋 Hola David, esta es tu primera modal!",
            })
          }
        >
          Abrir Modal
        </button>
      </div>
    </div>
  );
};

export default ModalDemo;

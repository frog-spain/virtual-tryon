import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext.jsx";
import MainContainer from "@/pages/ModelViewerPage/index.jsx";

const ModalDemo = () => {
  const [_, setModalData] = useContext(ModalContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Modal examples</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <button
          className="option-button"
          onClick={() =>
            setModalData({
              isOpen: true,
              type: "info",
              content: "Esta es una modal con texto simple",
            })
          }
        >
          Abrir Modal simple
        </button>

        <button
          className="option-button"
          onClick={() =>
            setModalData({
              isOpen: true,
              type: "info",
              content: <MainContainer />,
            })
          }
        >
          Abrir Modal componente React
        </button>
      </div>
    </div>
  );
};

export default ModalDemo;

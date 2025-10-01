import { useContext, useEffect } from "react";
import { ModalContext } from "@/src/Context/ModalContext";

import { lockBody, unlockBody } from "@/src/utils/lockBody.js";

import styles from "./Modal.module.scss";

const Modal = props => {
  const [modalDataContext, setModalDataContext] = useContext(ModalContext);

  const handleOpen = () => {
    lockBody();
  };

  const handleClose = () => {
    unlockBody();

    setModalDataContext({
      isOpen: false,
    });
  };

  useEffect(() => {
    if (props.isOpen === true) {
      handleOpen();
    } else if (props.isOpen === false) {
      handleClose();
    }
  }, [props.isOpen]);

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  let containerClasses = [styles["oModal__container"]];

  if (modalDataContext.type === "image") {
    containerClasses.push(styles["oModal__container_m_image"]);
  }

  return (
    <>
      {props.isOpen && (
        <div className={styles["oModal"]} role="dialog">
          <div className={containerClasses.join(" ")}>{props.content}</div>

          <div
            className={styles.oModal__close}
            onClick={handleClose}
            aria-hidden={true}
            aria-label="close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <div
            className={styles["oModal__backdrop"]}
            aria-hidden={true}
            onClick={handleClose}
          />
        </div>
      )}
    </>
  );
};

export default Modal;

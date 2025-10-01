import styles from "./Modal.module.scss";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

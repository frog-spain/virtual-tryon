import styles from "./Swatch.module.scss";

const Swatch = ({ color, isActive, onClick, name }) => {
  return (
    <button
      className={`${styles.swatch} ${isActive ? styles.active : ""}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      title={name}
    />
  );
};

export default Swatch;

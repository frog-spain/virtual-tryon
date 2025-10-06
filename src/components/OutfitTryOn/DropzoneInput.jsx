import { useState } from "react";
import styles from "./DropzoneInput.module.scss";

export default function DropzoneInput({
  label,
  file,
  setFile,
  badge,
  badgeColor,
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = e => {
    const files = e.target.files || e.dataTransfer.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  return (
    <label
      className={`${styles.dopzoneInput__dropzone} ${
        isDragging ? styles["dopzoneInput__dropzone--active"] : ""
      }`}
      onDragOver={e => e.preventDefault()}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
      onDrop={e => {
        e.preventDefault();
        setIsDragging(false);
        handleFileChange(e);
      }}
      data-badge={badge || undefined}
      style={badgeColor ? { "--badge-bg": badgeColor } : undefined}
    >
      <input type="file" accept="image/*" onChange={handleFileChange} hidden />

      {file ? (
        <img src={URL.createObjectURL(file)} alt="Preview" />
      ) : (
        <p>{label || "Click or drag & drop"}</p>
      )}
    </label>
  );
}

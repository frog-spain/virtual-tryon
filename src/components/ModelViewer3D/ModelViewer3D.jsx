import { useEffect, useState } from "react";

import styles from "./ModelViewer3D.module.scss";

const ModelViewer3D = ({ model, variants }) => {
  const [selected, setSelected] = useState("default");

  useEffect(() => {
    const modelViewer = document.querySelector("model-viewer");
    if (modelViewer) {
      modelViewer.variantName = selected === "default" ? null : selected;
    }
  }, [selected]);

  return (
    <div className={styles.viewerWrapper}>
      <model-viewer
        src={`/assets/models/${model}`}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        tone-mapping="neutral"
        shadow-intensity="1"
      >
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button">
          View in your space
        </button>
      </model-viewer>

      {variants.length > 0 && (
        <div className={styles.variants}>
          {variants.map(v => (
            <button
              key={v.name}
              className={`${styles.swatch} ${selected === v.name ? styles.active : ""}`}
              style={{ backgroundColor: v.color }}
              onClick={() => setSelected(v.name)}
              title={v.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelViewer3D;

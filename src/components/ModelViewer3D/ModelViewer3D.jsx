import { useEffect, useState } from "react";

import Swatch from "../../ui/Swatch";
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
            <Swatch
              key={v.name}
              color={v.color}
              isActive={selected === v.name}
              onClick={() => setSelected(v.name)}
              name={v.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModelViewer3D;

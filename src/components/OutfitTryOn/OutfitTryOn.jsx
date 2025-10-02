import { tryOnClothes } from "../../../lib/api.js";
import { useState } from "react";

import DropzoneInput from "./DropzoneInput.jsx";

import styles from "./OutfitTryOn.module.scss";

const OutfitTryOn = () => {
  const [userFile, setUserFile] = useState(null);
  const [outfitFile, setOutfitFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputImage, setOutputImage] = useState(null);

  const handleGenerate = async () => {
    if (!userFile || !outfitFile) {
      alert("Sube ambas imágenes.");
      return;
    }

    try {
      setLoading(true);
      setOutputImage(null);

      // usando api.js
      const result = await tryOnClothes({ userFile, outfitFile });

      if (result.image) {
        setOutputImage("data:image/png;base64," + result.image);
      } else {
        alert("No se recibió imagen. Revisa el backend o la API key.");
      }
    } catch (err) {
      console.error(err);
      alert("Error al generar la imagen: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.cOutfitTryOn__container}>
      <DropzoneInput
        label="Tu foto:"
        file={userFile}
        setFile={setUserFile}
        badge="+"
        badgeColor="var(--text-color)"
      />
      <DropzoneInput
        label="La prenda que quieres probarte:"
        file={outfitFile}
        setFile={setOutfitFile}
        badge="="
        badgeColor="var(--accent-color)"
      />

      <div className={styles.cOutfitTryOn__result}>
        {outputImage ? (
          <img src={outputImage} alt="Resultado" />
        ) : (
          <div className={styles.cOutfitTryOn__placeholder}>
            Aquí verás tu outfit con IA 👗
          </div>
        )}
      </div>

      <button
        className="option-button"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? "Procesando..." : "Probar prenda"}
      </button>
    </div>
  );
};

export default OutfitTryOn;

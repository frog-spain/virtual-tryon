import { tryOnClothes } from "../../../lib/api.js";
import { useState } from "react";

import DropzoneInput from "./DropzoneInput.jsx";
import OptionButton from "../../ui/OptionButton.jsx";

import styles from "./index.module.scss";

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
    <div className={styles.outfitTryOn__container}>
      <DropzoneInput
        label="Arrastra y suelta tu foto"
        file={userFile}
        setFile={setUserFile}
        badge="+"
        badgeColor="var(--text-color)"
      />
      <DropzoneInput
        file={outfitFile}
        setFile={setOutfitFile}
        badge="="
        badgeColor="var(--accent-color)"
      />

      <div className={styles.outfitTryOn__result}>
        {outputImage ? (
          <img src={outputImage} alt="Resultado" />
        ) : (
          <div className={styles.outfitTryOn__placeholder}>
            Aquí verás tu outfit con IA 👗
          </div>
        )}
      </div>
      <OptionButton
        onClick={handleGenerate}
        disabled={loading}
        label={loading ? "Procesando..." : "Probar prenda"}
      />
    </div>
  );
};

export default OutfitTryOn;

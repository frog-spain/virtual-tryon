import { tryOnClothes } from "/lib/api.js";
import { urlToFile } from "/lib/fileUtils.js";
import { useState, useEffect } from "react";

import DropzoneInput from "./DropzoneInput.jsx";
import OptionButton from "../../ui/OptionButton.jsx";

import styles from "./index.module.scss";

const OutfitTryOn = ({ outfitPath }) => {
  const [userFile, setUserFile] = useState(null);
  const [outfitFile, setOutfitFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputImage, setOutputImage] = useState(null);

  useEffect(() => {
    const loadOutfitFile = async () => {
      if (outfitPath && typeof outfitPath === "string") {
        try {
          const fileName = outfitPath.split("/").pop() || "outfit.png";
          const file = await urlToFile(outfitPath, fileName);
          setOutfitFile(file);
        } catch (err) {
          console.error("Error loading outfit file:", err);
        }
      }
    };

    loadOutfitFile();
  }, [outfitPath]);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      setOutputImage(null);

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
    <div className={styles.outfitTryOn}>
      <div className={styles.outfitTryOn__imagesGrid}>
        <DropzoneInput
          file={outfitFile}
          setFile={setOutfitFile}
          badge="+"
          badgeColor="var(--accent-color)"
        />
        <DropzoneInput
          label="Arrastra y suelta tu foto"
          file={userFile}
          setFile={setUserFile}
          badge="="
          badgeColor="var(--primary-color)"
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
      </div>

      {!outputImage && (
        <OptionButton
          onClick={handleGenerate}
          disabled={loading || !userFile || !outfitFile}
          label={loading ? "Procesando..." : "Probar prenda!"}
        />
      )}
    </div>
  );
};

export default OutfitTryOn;

export const tryOnClothes = async ({ userFile, outfitFile }) => {
  const readAsBase64 = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(",")[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const modelBase64 = await readAsBase64(userFile);
  const outfitBase64 = await readAsBase64(outfitFile);

  const payload = {
    model_image: modelBase64,
    outfit_image: outfitBase64,
    category: "upper_body",
    base64: true,
    num_inference_steps: 25,
    guidance_scale: 2.5,
  };

  const response = await fetch(
    "https://marketplace-xr-server.onrender.com/api/segfit",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || "Error desconocido");
  }

  return response.json(); // devuelve { image: ... }
};

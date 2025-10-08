// javascript
export async function extractVariantsFromGLB(url) {
  const { GLTFLoader } = await import(
    "three/examples/jsm/loaders/GLTFLoader.js"
  );
  const loader = new GLTFLoader();

  const gltf = await loader.loadAsync(url);
  const json = gltf.parser?.json;

  // 1) KHR_materials_variants present at root -> use its variants list
  const rootVariants = json?.extensions?.KHR_materials_variants?.variants;
  if (Array.isArray(rootVariants) && rootVariants.length) {
    return rootVariants.map((v, i) => ({
      id: v.name ?? `variant_${i}`,
      label: v.name ?? `Variant ${i + 1}`,
      raw: v,
    }));
  }

  // 2) fallback: collect unique material names used in the scene
  const names = new Set();
  gltf.scene.traverse(n => {
    if (n.isMesh) {
      const mats = Array.isArray(n.material) ? n.material : [n.material];
      mats.forEach(m => {
        if (!m) return;
        names.add(m.name || m.userData?.name || m.uuid);
      });
    }
  });

  if (names.size) {
    return Array.from(names).map((name, i) => ({
      id: String(i),
      label: String(name),
    }));
  }

  // 3) ultimate fallback
  return [{ id: "default", label: "Default" }];
}

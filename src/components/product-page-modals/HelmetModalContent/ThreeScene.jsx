import { Suspense, cloneElement } from "react";
import { Canvas } from "@react-three/fiber";

const ThreeScene = ({
  transformMatrix,
  defaultModel,
  fantasyModel,
  punkModel,
  selectedVariant,
}) => {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: 12,
        transform: "scaleX(-1)",
      }}
    >
      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 0, 5]} intensity={5.5} />

      <Suspense fallback={"Loading..."}>
        {/* Render both models but control visibility */}
        {defaultModel &&
          cloneElement(defaultModel, {
            transformMatrix,
            visible: selectedVariant === "Default",
          })}
        {fantasyModel &&
          cloneElement(fantasyModel, {
            transformMatrix,
            visible: selectedVariant === "Fantasy",
          })}
        {punkModel &&
          cloneElement(punkModel, {
            transformMatrix,
            visible: selectedVariant === "Punk",
          })}
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;

import { Suspense, cloneElement, isValidElement } from "react";
import { Canvas } from "@react-three/fiber";

const ThreeScene = ({ transformMatrix, model }) => {
  const modelWithProps = isValidElement(model)
    ? cloneElement(model, { transformMatrix })
    : model;

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

      <Suspense fallback={"Loading..."}>{modelWithProps}</Suspense>
    </Canvas>
  );
};

export default ThreeScene;

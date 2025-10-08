import { Canvas } from "@react-three/fiber";
import { cloneElement } from "react";

const ThreeScene = ({ transformMatrix, nosePosition, eyeDistance, model }) => {
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
      <ambientLight intensity={1} />
      {cloneElement(model, {
        transformMatrix,
        nosePosition,
        eyeDistance,
        visible: true,
      })}
    </Canvas>
  );
};

export default ThreeScene;

// in GlassesScene.jsx
import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export default function NoseAnchor({ nosePosition, children }) {
  const { camera } = useThree();
  const ref = useRef();

  useFrame(() => {
    if (!ref.current || !nosePosition) return;

    const { x, y } = nosePosition; // IMPORTANT: x,y are normalized [0..1] (no pixel mult!)
    const xC = (x - 0.5) * 2; // center to [-1..1]
    const yC = -(y - 0.5) * 2; // flip Y, center to [-1..1]

    const depth = 5; // fixed distance in front of camera for now
    const fov = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * depth;
    const width = height * camera.aspect;

    // camera-space position
    const camX = xC * (width / 2);
    const camY = yC * (height / 2);
    const camZ = -depth;

    // to world space
    const worldPos = new Vector3(camX, camY, camZ).applyMatrix4(
      camera.matrixWorld,
    );
    ref.current.position.copy(worldPos);
  });

  return <group ref={ref}>{children}</group>;
}

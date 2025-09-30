import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Matrix4, Vector3, Quaternion } from "three";

const GlassesModel = ({
  transformMatrix,
  nosePosition,
  eyeDistance,
  visible,
}) => {
  const { scene } = useGLTF("/assets/models/glasses.glb");
  const { camera } = useThree();
  const customScale = 2.1;
  const distScale = 0.19;

  useEffect(() => {
    if (transformMatrix && nosePosition && eyeDistance) {
      const m = new Matrix4().fromArray(transformMatrix);
      const position = new Vector3();
      const rotation = new Quaternion();
      const scale = new Vector3();

      m.decompose(position, rotation, scale);

      const { x, y } = nosePosition;
      const xC = (x - 0.5) * 2;
      const yC = -(y - 0.5) * 2;
      const depth = 5;
      const fov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(fov / 2) * depth;
      const width = height * camera.aspect;

      const camX = xC * (width / 2);
      const camY = yC * (height / 2);
      const camZ = -depth;

      const noseWorld = new Vector3(camX, camY, camZ).applyMatrix4(
        camera.matrixWorld
      );

      // Apply rotation + scale from transformMatrix
      scene.position.copy(noseWorld); // nose anchor position
      scene.quaternion.copy(rotation); // head orientation
      const dynamicScale = (eyeDistance / distScale) * customScale;
      scene.scale.set(dynamicScale, dynamicScale, dynamicScale);

      scene.updateMatrix();
      scene.matrixAutoUpdate = false;
    }
  }, [transformMatrix, nosePosition, eyeDistance]);

  return <primitive object={scene} visible={visible} />;
};

export default GlassesModel;

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Matrix4, Vector3, Quaternion } from "three";

const HatModel = ({ transformMatrix, visible }) => {
  const { scene } = useGLTF("/assets/models/hat2.glb");
  const customScale = 13;

  useEffect(() => {
    if (transformMatrix) {
      const m = new Matrix4().fromArray(transformMatrix);
      const position = new Vector3();
      const rotation = new Quaternion();
      const scale = new Vector3();

      m.decompose(position, rotation, scale);

      scene.position.copy(position);
      scene.quaternion.copy(rotation);
      scene.scale.set(customScale, customScale, customScale);

      // Offset upwards
      const headUp = new Vector3(0, 1, 0).applyQuaternion(rotation);
      const offset = headUp.multiplyScalar(15);
      scene.position.add(offset);

      // Adjust the model: turn 90° around Y
      const extraRotation = new Quaternion().setFromAxisAngle(
        new Vector3(0, 1, 0), // axis: Y (up in head space)
        Math.PI / 2, // 90 degrees
      );

      // Tilt forward/backward around X
      const tilt = new Quaternion().setFromAxisAngle(
        new Vector3(1, 0, 0),
        Math.PI / 10,
      );

      // Combine
      scene.quaternion.multiply(tilt).multiply(extraRotation);

      scene.updateMatrix();
      scene.matrixAutoUpdate = false;
    }
  }, [transformMatrix]);

  return <primitive object={scene} visible={visible} />;
};

export default HatModel;

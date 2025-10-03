import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { Matrix4, Vector3, Quaternion } from "three";

const HelmetModel = ({ transformMatrix, visible = true }) => {
  const { scene } = useGLTF("/assets/models/helmet.glb");
  const customScale = 7.4;

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
      scene.updateMatrix();
      scene.matrixAutoUpdate = false;
    }
  }, [transformMatrix]);

  return <primitive object={scene} visible={visible} />;
};

export default HelmetModel;

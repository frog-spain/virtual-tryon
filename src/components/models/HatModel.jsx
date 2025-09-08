import { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { Matrix4, Vector3, Quaternion } from 'three';

const HatModel = ({ transformMatrix, visible }) => {
  const { scene } = useGLTF('/assets/models/hat.glb');
  const customScale = 24;

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

export default HatModel;

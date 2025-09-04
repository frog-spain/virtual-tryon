import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Matrix4, Vector3, Quaternion } from 'three';
import NoseDot from './NoseDot';

export default function GlassesScene({
  transformMatrix,
  nosePosition,
  customScale = 14,
}) {
  const { scene } = useGLTF('/assets/models/glasses.glb');

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

  return (
    <Canvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        borderRadius: 12,
        transform: 'scaleX(-1)',
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />

      {/* Glasses model */}
      {/* <primitive object={scene} /> */}

      {/* Dot */}
      <NoseDot nosePosition={nosePosition} />
    </Canvas>
  );
}

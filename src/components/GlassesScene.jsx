import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Matrix4, Vector3, Quaternion } from 'three';

function GlassesModel({ transformMatrix, scale = 13 }) {
  const { scene } = useGLTF('/assets/models/glasses.glb');

  useEffect(() => {
    if (transformMatrix) {
      scene.matrix.fromArray(transformMatrix);
      scene.matrix.decompose(scene.position, scene.quaternion, scene.scale);

      scene.scale.set(scale, scale, scale);
      scene.updateMatrix();
      scene.matrixAutoUpdate = false;
    }
  }, [transformMatrix]);

  return <primitive object={scene} />;
}

export default function GlassesScene({ transformMatrix }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 2] }}
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
      <GlassesModel transformMatrix={transformMatrix} />
    </Canvas>
  );
}

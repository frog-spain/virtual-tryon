import { Canvas } from '@react-three/fiber';

import GlassesModel from './GlassesModel';

export default function GlassesScene({ transformMatrix, nosePosition }) {
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
      <GlassesModel
        nosePosition={nosePosition}
        transformMatrix={transformMatrix}
      />
    </Canvas>
  );
}

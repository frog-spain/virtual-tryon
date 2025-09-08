import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import GlassesModel from './models/GlassesModel';
import HelmetModel from './models/HelmetModel';
import HatModel from './models/HatModel';

export default function ({ transformMatrix, nosePosition, objectToRender }) {
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
      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 0, 5]} intensity={5.5} />

      <Suspense fallback={null}>
        {/* Glasses */}
        <GlassesModel
          visible={objectToRender === 'glasses'}
          nosePosition={nosePosition}
          transformMatrix={transformMatrix}
        />

        {/* Helmet */}
        <HelmetModel
          transformMatrix={transformMatrix}
          visible={objectToRender === 'helmet'}
        />

        {/* Hat */}
        <HatModel
          transformMatrix={transformMatrix}
          visible={objectToRender === 'hat'}
        />
      </Suspense>
    </Canvas>
  );
}

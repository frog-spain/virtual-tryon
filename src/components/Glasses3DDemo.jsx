import { useEffect, useRef, useState } from 'react';
import { getFaceLandmarker } from '../../lib/mediapipe';
import GlassesScene from './GlassesScene';

const Glasses3DDemo = () => {
  const videoRef = useRef(null);
  const [transformMatrix, setTransformMatrix] = useState(null);

  useEffect(() => {
    let stream = null;
    let cancelled = false;

    (async () => {
      stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (!videoRef.current || cancelled) return;
      videoRef.current.srcObject = stream;
      await videoRef.current.play();

      const landmarker = await getFaceLandmarker({
        outputFacialTransformationMatrixes: true,
      });

      const loop = () => {
        if (!videoRef.current) return;
        const result = landmarker.detectForVideo(
          videoRef.current,
          performance.now()
        );

        const matrix = result.facialTransformationMatrixes?.[0];

        console.log(
          'matrix',
          matrix.data[12],
          matrix.data[13],
          matrix.data[14]
        );

        if (matrix?.data) setTransformMatrix(matrix.data);

        requestAnimationFrame(loop);
      };

      loop();
    })();

    return () => {
      cancelled = true;
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        style={{
          borderRadius: 12,
          transform: 'scaleX(-1)',
        }}
      />
      <GlassesScene transformMatrix={transformMatrix} />
    </div>
  );
};

export default Glasses3DDemo;

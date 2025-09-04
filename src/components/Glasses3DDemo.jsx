import { useEffect, useRef, useState } from 'react';
import { getFaceLandmarker } from '../../lib/mediapipe';
import GlassesScene from './GlassesScene';
import OptionButton from './InteractiveOptions/OptionButton';

const Glasses3DDemo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [transformMatrix, setTransformMatrix] = useState(null);
  const [nosePosition, setNosePosition] = useState(null);

  const [isMeshOn, setIsMeshOn] = useState(true);

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
        if (!videoRef.current || !canvasRef.current) return;

        const result = landmarker.detectForVideo(
          videoRef.current,
          performance.now()
        );

        const faceLandmarks = result.faceLandmarks?.[0]; // array of 468 normalized points

        if (isMeshOn && faceLandmarks) {
          const ctx = canvasRef.current.getContext('2d');
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          ctx.strokeStyle = 'lime';
          ctx.lineWidth = 1;

          for (const point of faceLandmarks) {
            const x = point.x * canvasRef.current.width;
            const y = point.y * canvasRef.current.height;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }

        const nose = faceLandmarks[168];
        const faceLandmarkNosePosition = {
          x: nose.x,
          y: nose.y,
          z: nose.z,
        };
        setNosePosition(faceLandmarkNosePosition);

        const matrix = result.facialTransformationMatrixes?.[0];

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
    <div className="demo-wrapper">
      <OptionButton
        label={`Mesh ${isMeshOn ? 'ON' : 'OFF'}`}
        onClick={() => setIsMeshOn(!isMeshOn)}
      />

      <div className="position-relative">
        <video
          ref={videoRef}
          style={{
            borderRadius: 12,
            transform: 'scaleX(-1)',
          }}
        />

        {/* Mesh */}
        <canvas
          ref={canvasRef}
          width={videoRef.current?.videoWidth}
          height={videoRef.current?.videoHeight}
          className="position-absolute"
          style={{ display: `${isMeshOn ? 'inherit' : 'none'}` }}
        />

        {/* Glasses */}
        <GlassesScene
          transformMatrix={transformMatrix}
          nosePosition={nosePosition}
        />
      </div>
    </div>
  );
};

export default Glasses3DDemo;

import { useEffect, useRef, useState } from 'react';
import { getFaceLandmarker } from '../../lib/mediapipe';
import ThreeScene from './ThreeScene';
import OptionButton from '../ui/OptionButton';

const Demo3D = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [transformMatrix, setTransformMatrix] = useState(null);
  const [nosePosition, setNosePosition] = useState(null);

  const [isMeshOn, setIsMeshOn] = useState(true);
  const [isObjectOn, setIsObjectOn] = useState(true);

  const objects = ['glasses', 'helmet', 'hat'];
  const [currentObjectIdx, setCurrentObjectIdx] = useState(0);

  const clickNext = () => {
    let newCurrent = currentObjectIdx + 1;
    if (newCurrent === objects.length) newCurrent = 0;
    setCurrentObjectIdx(newCurrent);
  };

  const clickPrev = () => {
    let newCurrent = currentObjectIdx - 1;
    if (newCurrent === -1) newCurrent = objects.length - 1;
    setCurrentObjectIdx(newCurrent);
  };

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
      <ul className="options-list">
        <OptionButton
          label={`Mesh ${isMeshOn ? 'ON' : 'OFF'}`}
          onClick={() => setIsMeshOn(!isMeshOn)}
        />
        <OptionButton
          label={`Object ${isMeshOn ? 'ON' : 'OFF'}`}
          onClick={() => setIsObjectOn(!isObjectOn)}
        />
        <div className="object-controllers">
          <OptionButton label="← Prev" onClick={clickPrev} />
          <OptionButton label="Next →" onClick={clickNext} />
        </div>
      </ul>

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

        {/* Theejs Object */}
        {isObjectOn && (
          <ThreeScene
            transformMatrix={transformMatrix}
            nosePosition={nosePosition}
            objectToRender={objects[currentObjectIdx]}
          />
        )}
      </div>
    </div>
  );
};

export default Demo3D;

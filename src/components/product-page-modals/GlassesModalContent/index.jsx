import { useEffect, useRef, useState } from "react";
// Components
import ThreeScene from "./ThreeScene";
import GlassesModel from "../../models/GlassesModel";
// Dependencies
import { getFaceLandmarker } from "/lib/mediapipe";
import styles from "./index.module.scss";

const DEFAULT_VARIANT = "Default";

const GlassesModalContent = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [transformMatrix, setTransformMatrix] = useState(null);
  const [nosePosition, setNosePosition] = useState(null);
  const [eyeDistance, setEyeDistance] = useState(null);

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

        const faceLandmarks = result.faceLandmarks?.[0];

        if (faceLandmarks) {
          // Calculate nose position (using a specific landmark point for nose)
          const noseLandmark = faceLandmarks[197];
          setNosePosition({ x: noseLandmark.x, y: noseLandmark.y });

          // Calculate eye distance for scaling
          const leftEye = faceLandmarks[33]; // Left eye outer corner
          const rightEye = faceLandmarks[263]; // Right eye outer corner
          const distance = Math.sqrt(
            Math.pow(rightEye.x - leftEye.x, 2) +
              Math.pow(rightEye.y - leftEye.y, 2)
          );
          setEyeDistance(distance);

          const ctx = canvasRef.current.getContext("2d");
          ctx.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
          );
          ctx.strokeStyle = "lime";
          ctx.lineWidth = 1;

          for (const point of faceLandmarks) {
            const x = point.x * canvasRef.current.width;
            const y = point.y * canvasRef.current.height;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
            ctx.stroke();
          }
        }

        const matrix = result.facialTransformationMatrixes?.[0];
        if (matrix?.data) setTransformMatrix(matrix.data);

        requestAnimationFrame(loop);
      };

      loop();
    })();

    return () => {
      cancelled = true;
      if (stream) stream.getTracks().forEach(t => t.stop());
    };
  }, []);

  return (
    <div className={styles.productPageModalContainer}>
      <div className="position-relative">
        {/* Camera recording */}
        <video
          ref={videoRef}
          style={{
            borderRadius: 12,
            transform: "scaleX(-1)",
            display: "flex",
          }}
        />

        {/* Media Pipe */}
        <canvas
          ref={canvasRef}
          width={videoRef.current?.videoWidth}
          height={videoRef.current?.videoHeight}
          className="position-absolute"
          style={{ display: "none" }}
        />

        {/* 3D Model */}
        <ThreeScene
          transformMatrix={transformMatrix}
          nosePosition={nosePosition}
          eyeDistance={eyeDistance}
          model={<GlassesModel />}
        />
      </div>
    </div>
  );
};

export default GlassesModalContent;

import { useEffect, useRef, useState } from "react";
import { getFaceLandmarker } from "/lib/mediapipe";
import ThreeScene from "./ThreeScene";
import HelmetModel from "../models/HelmetModel";
import styles from "./Helmet3DViewer.module.scss";

const Helmet3DViewer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

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
        if (!videoRef.current || !canvasRef.current) return;

        const result = landmarker.detectForVideo(
          videoRef.current,
          performance.now()
        );

        const faceLandmarks = result.faceLandmarks?.[0]; // array of 468 normalized points

        if (faceLandmarks) {
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
        <ThreeScene transformMatrix={transformMatrix} model={<HelmetModel />} />
      </div>
    </div>
  );
};

export default Helmet3DViewer;

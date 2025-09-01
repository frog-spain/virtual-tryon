import { useEffect, useRef, useState } from 'react';
import { getFaceLandmarker } from '../../lib/mediapipe';

export default function Glasses2DDemo() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [ready, setReady] = useState(false);
  const [img, setImg] = useState(null);

  // Phase A: Load the glasses image
  useEffect(() => {
    const i = new Image();

    i.src = new URL(
      '/assets/mediapipe/black-glasses.webp',
      import.meta.url
    ).href;

    i.onload = () => setImg(i);
  }, []);

  // Phase B: Start the camera
  useEffect(() => {
    let stream = null;
    let cancelled = false;

    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user', // selfie
          },
          audio: false,
        });
        if (!videoRef.current || cancelled) return;
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setReady(true);
      } catch (err) {
        console.error('Camera error:', err);
      }
    })();

    return () => {
      cancelled = true;
      if (stream) stream.getTracks().forEach((t) => t.stop());
    };
  }, []);

  // Phase C/D: Create landmarker and run the per-frame loop
  useEffect(() => {
    if (!ready) return;
    let raf = 0;
    let running = true;
    let landmarker;

    const setup = async () => {
      landmarker = await getFaceLandmarker();
      loop();
    };

    const loop = () => {
      if (!running) return;

      const video = videoRef.current;
      const canvas = canvasRef.current;
      if (!video || !canvas || video.readyState < 2) {
        raf = requestAnimationFrame(loop);
        return;
      }

      // Match canvas to the actual video size for crisp overlay

      const vw = video.videoWidth;
      const vh = video.videoHeight;
      if (canvas.width !== vw || canvas.height !== vh) {
        canvas.width = vw;
        canvas.height = vh;
      }

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, vw, vh);

      // Phase D: Run detection for current frame
      const result = landmarker.detectForVideo(video, performance.now());
      const face = result?.faceLandmarks?.[0]; // array of 468 normalized points

      // Phase E: Draw the overlay
      if (face && img) {
        drawGlasses(ctx, face, img, vw, vh);
      }

      raf = requestAnimationFrame(loop);
    };

    setup();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      // landmarker is a shared singleton; no need to close here
    };
  }, [ready, img]);

  //   Main return
  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        playsInline
        muted
        style={{
          borderRadius: 12,
          transform: 'scaleX(-1)', // mirror selfie
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          transform: 'scaleX(-1)', // mirror overlay to match video
        }}
      />
    </div>
  );
}

/**
 * Draws glasses using two eye corner landmarks to compute:
 * - center position (midpoint between the eyes)
 * - scale (distance between eye corners)
 * - rotation (angle of the eye line)
 *
 * MediaPipe returns normalized coordinates (x,y in 0..1).
 */
function drawGlasses(ctx, face, img, w, h) {
  // Helper to convert normalized landmark to pixel coords
  const px = (i) => ({ x: face[i].x * w, y: face[i].y * h });

  // Choose robust, opposite eye corner indices
  // Common FaceMesh indices:
  //   33  -> left eye outer corner
  //   263 -> right eye outer corner
  const leftOuter = px(33);
  const rightOuter = px(263);

  // Midpoint => where the glasses should be centered
  const center = {
    x: (leftOuter.x + rightOuter.x) / 2,
    y: (leftOuter.y + rightOuter.y) / 2,
  };

  // Vector between eye corners gives us both distance and angle
  const vx = rightOuter.x - leftOuter.x;
  const vy = rightOuter.y - leftOuter.y;
  const eyeDist = Math.hypot(vx, vy);
  const angle = Math.atan2(vy, vx);

  // Scale the glasses a bit wider than the inter-eye distance
  const width = eyeDist * 1.9;
  const height = (img.height / img.width) * width;

  ctx.save();
  ctx.translate(center.x, center.y);
  ctx.rotate(angle);
  ctx.drawImage(img, -width / 2, -height / 2, width, height);
  ctx.restore();
}

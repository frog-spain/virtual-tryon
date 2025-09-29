import { FilesetResolver, FaceLandmarker } from "@mediapipe/tasks-vision";

// Singleton promise so we only initialize once
let faceLandmarkerPromise = null;

/**
 * Returns a ready-to-use FaceLandmarker instance.
 * Internally loads the WASM fileset and the face model .task file.
 */
export function getFaceLandmarker() {
  if (!faceLandmarkerPromise) {
    faceLandmarkerPromise = (async () => {
      // 1) Load WASM + support files
      const fileset = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm",
      );

      // 2) Create the landmarker with model + runtime options
      const landmarker = await FaceLandmarker.createFromOptions(fileset, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        runningMode: "VIDEO",
        numFaces: 1,
        outputFacialTransformationMatrixes: true,
      });

      return landmarker;
    })();
  }
  return faceLandmarkerPromise;
}

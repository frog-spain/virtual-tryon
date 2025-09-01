import BackButton from '../components/BackButton';
import GlassesModelViewer from '../components/GlassesModelViewer';

export default function MediaPipePage() {
  return (
    <div class="demo-container">
      <BackButton />

      <h1>MediaPipe – 3D Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>
      <GlassesModelViewer />
    </div>
  );
}

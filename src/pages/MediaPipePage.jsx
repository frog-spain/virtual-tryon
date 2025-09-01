import GlassesDemo from '../components/GlassesDemo';
import BackButton from '../components/BackButton';

export default function MediaPipePage() {
  return (
    <div class="demo-container">
      <BackButton />

      <h1>MediaPipe – Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>

      <GlassesDemo />
    </div>
  );
}

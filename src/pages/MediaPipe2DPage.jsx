import GlassesDemo from '../components/Glasses2DDemo';
import BackButton from '../components/BackButton';

export default function MediaPipePage() {
  return (
    <div class="demo-container">
      <BackButton />

      <h1>MediaPipe – 2D Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>

      <GlassesDemo />
    </div>
  );
}

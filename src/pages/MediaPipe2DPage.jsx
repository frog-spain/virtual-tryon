import GlassesDemo from '../components/Demo2D';
import BackButton from '../ui/BackButton';

export default function MediaPipePage() {
  return (
    <div className="demo-container">
      <BackButton />

      <h1>MediaPipe – 2D Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>

      <GlassesDemo />
    </div>
  );
}

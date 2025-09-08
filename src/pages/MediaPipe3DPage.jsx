import BackButton from '../ui/BackButton';
import Demo3D from '../components/Demo3D';

export default function MediaPipePage() {
  return (
    <div className="demo-container">
      <BackButton />

      <h1>MediaPipe – 3D Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>
      <Demo3D />
    </div>
  );
}

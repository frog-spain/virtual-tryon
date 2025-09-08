import BackButton from '../components/ui/BackButton';
import Glasses3DDemo from '../components/Glasses3DDemo';

export default function MediaPipePage() {
  return (
    <div className="demo-container">
      <BackButton />

      <h1>MediaPipe – 3D Glasses</h1>
      <p>Face tracking demo using MediaPipe Tasks (Face Landmarker).</p>
      <Glasses3DDemo />
    </div>
  );
}

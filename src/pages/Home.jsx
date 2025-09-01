import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 720, width: '100%', textAlign: 'center' }}>
        <h1 style={{ marginBottom: 10 }}>AR Demo Hub</h1>
        <p style={{ marginBottom: 24 }}>Choose a demo to launch.</p>
        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          }}
        >
          <Link to="/model-viewer" className="option-button">
            Model Viewer
          </Link>
          <Link to="/mediapipe" className="option-button">
            MediaPipe 2D
          </Link>
          <Link to="/mediapipe-3d" className="option-button">
            MediaPipe 3D
          </Link>
        </div>
      </div>
    </main>
  );
}

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
          <Link to="/model-viewer" class="option-button">
            Model Viewer
          </Link>
          <Link to="/mediapipe" class="option-button">
            MediaPipe AR
          </Link>
        </div>
      </div>
    </main>
  );
}

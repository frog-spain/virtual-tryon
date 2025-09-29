import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home-main">
      <div style={{ maxWidth: 720, width: "100%", textAlign: "center" }}>
        <h1>AR Demo Hub</h1>
        <p style={{ marginBottom: 24 }}>Choose a demo to launch.</p>

        <div>
          <nav className="home-nav">
            <Link to="/product-demo" className="option-button">
              Product demo
            </Link>
          </nav>

          <hr />

          <nav className="home-nav">
            <Link to="/model-viewer" className="option-button">
              Model Viewer
            </Link>
            <Link to="/mediapipe" className="option-button">
              MediaPipe 2D
            </Link>
            <Link to="/mediapipe-3d" className="option-button">
              MediaPipe 3D
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}

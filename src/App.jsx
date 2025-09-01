import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const ModelViewerPage = lazy(() => import('./pages/ModelViewerPage.jsx'));
const MediaPipe2DPage = lazy(() => import('./pages/MediaPipe2DPage.jsx'));
const MediaPipe3DPage = lazy(() => import('./pages/MediaPipe3DPage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model-viewer" element={<ModelViewerPage />} />
      <Route path="/mediapipe" element={<MediaPipe2DPage />} />
      <Route path="/mediapipe-3d" element={<MediaPipe3DPage />} />
    </Routes>
  );
}

export default App;

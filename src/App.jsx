import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const ModelViewerPage = lazy(() => import('./pages/ModelViewerPage.jsx'));
const MediaPipePage = lazy(() => import('./pages/MediaPipePage.jsx'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model-viewer" element={<ModelViewerPage />} />
      <Route path="/mediapipe" element={<MediaPipePage />} />
    </Routes>
  );
}

export default App;

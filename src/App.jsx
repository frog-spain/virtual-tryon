import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home.jsx'));
const ModelViewerPage = lazy(() => import('./pages/ModelViewerPage'));
const MediaPipe2DPage = lazy(() => import('./pages/MediaPipe2DPage'));
const MediaPipe3DPage = lazy(() => import('./pages/MediaPipe3DPage'));
const ProductDemoPage = lazy(() => import('./pages/ProductDemoPage'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/model-viewer" element={<ModelViewerPage />} />
      <Route path="/mediapipe" element={<MediaPipe2DPage />} />
      <Route path="/mediapipe-3d" element={<MediaPipe3DPage />} />
      <Route path="/product-demo" element={<ProductDemoPage />} />
    </Routes>
  );
}

export default App;

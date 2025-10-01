import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ModalProvider } from "@/context/ModalProvider.jsx";
import ModalWrapper from "@/components/atom/Modal/ModalWrapper.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const ModelViewerPage = lazy(() => import("./pages/ModelViewerPage"));
const MediaPipe2DPage = lazy(() => import("./pages/MediaPipe2DPage"));
const MediaPipe3DPage = lazy(() => import("./pages/MediaPipe3DPage"));
const ProductDemoPage = lazy(() => import("./pages/ProductDemoPage"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const ModalDemo = lazy(() => import("./pages/ModalDemo.jsx"));

function App() {
  return (
    <ModalProvider>
      <ModalWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model-viewer" element={<ModelViewerPage />} />
          <Route path="/mediapipe" element={<MediaPipe2DPage />} />
          <Route path="/mediapipe-3d" element={<MediaPipe3DPage />} />
          <Route path="/product-demo" element={<ProductDemoPage />} />
          <Route
            path="/product-demo/products/:slug"
            element={<ProductPage />}
          />
          <Route path="/modal-demo" element={<ModalDemo />} />
        </Routes>
      </ModalWrapper>
    </ModalProvider>
  );
}

export default App;

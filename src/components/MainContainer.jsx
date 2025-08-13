import { useState } from "react";

import ModelViewer from "./ModelViewer";
import ModelViewerOptions from "./ModelViewerOptions";

const MainContainer = () => {
  const [isAnimationOn, setIsAnimationOn] = useState(false);
  const [isAnnotationsOn, setIsAnnotationsOn] = useState(false);
  const [isAutorotateOn, setIsAutorotateOn] = useState(true);

  return (
    <div class="model-viewer-container">
      <h1>model-viewer</h1>

      <ModelViewer
        src="/assets/models/crab-animation.glb"
        camera-controls
        touch-action="pan-y"
        animation-name="Crab"
        shadow-intensity="1"
        autoplay={isAnimationOn}
        isAnnotationsOn={isAnnotationsOn}
        auto-rotate={isAutorotateOn}
      />

      <ModelViewerOptions
        handleAnimationClick={() => setIsAnimationOn(!isAnimationOn)}
        handleAnnotationsClick={() => setIsAnnotationsOn(!isAnnotationsOn)}
        handleAutorotateClick={() => setIsAutorotateOn(!isAutorotateOn)}
      />
    </div>
  );
};

export default MainContainer;

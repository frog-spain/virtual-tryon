import { useState, useEffect } from 'react';

import ModelViewer from './ModelViewer';
import InteractiveOptions from './InteractiveOptions';

const MainContainer = () => {
  const [isAnimationOn, setIsAnimationOn] = useState(false);
  const [isAnnotationsOn, setIsAnnotationsOn] = useState(false);
  const [isAutorotateOn, setIsAutorotateOn] = useState(false);
  const [isBackgroundOn, setIsBackgroundOn] = useState(false);

  return (
    <div class="model-viewer-container">
      <h1>model-viewer</h1>

      <ModelViewer
        src="/assets/models/crab-animation.glb"
        camera-controls
        touch-action="pan-y"
        shadow-intensity="2"
        autoplay={isAnimationOn}
        isAnnotationsOn={isAnnotationsOn}
        auto-rotate={isAutorotateOn}
        skybox-image={isBackgroundOn && '/assets/bg-sky.hdr'}
      />

      <InteractiveOptions
        handleAnimationClick={() => setIsAnimationOn(!isAnimationOn)}
        handleAnnotationsClick={() => setIsAnnotationsOn(!isAnnotationsOn)}
        handleAutorotateClick={() => setIsAutorotateOn(!isAutorotateOn)}
        handleBackgroundClick={() => setIsBackgroundOn(!isBackgroundOn)}
        isAnimationOn={isAnimationOn}
        isAnnotationsOn={isAnnotationsOn}
        isAutorotateOn={isAutorotateOn}
        isBackgroundOn={isBackgroundOn}
      />
    </div>
  );
};

export default MainContainer;

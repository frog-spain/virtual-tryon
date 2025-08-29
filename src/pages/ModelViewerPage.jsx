import { useState } from 'react';

import ModelViewer from '../components/ModelViewer';
import InteractiveOptions from '../components/InteractiveOptions';

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
        autoplay={isAnimationOn}
        isAnnotationsOn={isAnnotationsOn}
        auto-rotate={isAutorotateOn}
        skybox-image={isBackgroundOn && '/assets/bg-sky.hdr'}
        environment-image={isBackgroundOn && '/assets/bg-sky.hdr'}
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

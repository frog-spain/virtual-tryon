import { useState } from 'react';

import CrabModelViewer from '../components/CrabModelViewer';
import InteractiveOptions from '../components/ui/InteractiveOptions';
import BackButton from '../components/ui/BackButton';

const MainContainer = () => {
  const [isAnimationOn, setIsAnimationOn] = useState(false);
  const [isAnnotationsOn, setIsAnnotationsOn] = useState(false);
  const [isAutorotateOn, setIsAutorotateOn] = useState(false);
  const [isBackgroundOn, setIsBackgroundOn] = useState(false);

  return (
    <div className="demo-container">
      <BackButton />

      <h1>model-viewer</h1>

      <CrabModelViewer
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

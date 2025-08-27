import OptionButton from './OptionButton';

const ModelViewerOptions = ({
  handleAnimationClick,
  handleAnnotationsClick,
  handleAutorotateClick,
  handleBackgroundClick,
  isAnimationOn,
  isAnnotationsOn,
  isAutorotateOn,
  isBackgroundOn,
}) => {
  return (
    <ul class="options-list">
      <li>
        <OptionButton
          label="Animation"
          onClick={handleAnimationClick}
          isActive={isAnimationOn}
        />
      </li>
      <li>
        <OptionButton
          label="Annotations"
          onClick={handleAnnotationsClick}
          isActive={isAnnotationsOn}
        />
      </li>
      <li>
        <OptionButton
          label="Autorotate"
          onClick={handleAutorotateClick}
          isActive={isAutorotateOn}
        />
      </li>
      <li>
        <OptionButton
          label="Background"
          onClick={handleBackgroundClick}
          isActive={isBackgroundOn}
        />
      </li>
    </ul>
  );
};

export default ModelViewerOptions;

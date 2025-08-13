import OptionButton from "./OptionButton";

const ModelViewerOptions = ({
  handleAnimationClick,
  handleAnnotationsClick,
  handleAutorotateClick,
}) => {
  return (
    <ul class="options-list">
      <li>
        <OptionButton label="Animation" onClick={handleAnimationClick} />
      </li>
      <li>
        <OptionButton label="Annotations" onClick={handleAnnotationsClick} />
      </li>
      <li>
        <OptionButton label="Autorotate" onClick={handleAutorotateClick} />
      </li>
    </ul>
  );
};

export default ModelViewerOptions;

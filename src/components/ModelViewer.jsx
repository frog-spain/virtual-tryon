const ModelViewer = ({ isAnnotationsOn, ...rest }) => {
  return (
    <>
      <model-viewer {...rest}>
        {isAnnotationsOn && (
          <>
            <div slot="hotspot-0" data-position="-0.0569m 0.0969m -0.1398m">
              The back
            </div>
            <div
              slot="hotspot-1"
              class="anchor"
              data-surface="0 0 228 113 111 0.217 0.341 0.442"
            >
              Clamp
            </div>
          </>
        )}
      </model-viewer>
    </>
  );
};

export default ModelViewer;

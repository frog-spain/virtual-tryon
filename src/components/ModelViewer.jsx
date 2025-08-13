const ModelViewer = ({ ...rest }) => {
  return (
    <>
      <model-viewer {...rest}>
        <button
          class="hotspot"
          slot="hotspot-hand"
          data-position="0 0 0"
          data-normal="0 0 0"
        >
          <div class="annotation">This hotspot disappears completely</div>
        </button>
      </model-viewer>
    </>
  );
};

export default ModelViewer;

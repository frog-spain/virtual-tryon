const ModelViewer = ({ isAnnotationsOn, ...rest }) => {
  return (
    <>
      <model-viewer
        camera-controls
        shadow-intensity="0.92"
        shadow-softness="0.82"
        exposure="1.49"
        tone-mapping="neutral"
        auto-rotate-delay="100"
        {...rest}
      >
        {isAnnotationsOn && (
          <>
            <div
              class="hotspot"
              slot="hotspot-1"
              data-surface="0 0 16033 15836 15709 0.386 0.177 0.436"
              data-visibility-attribute="visible"
            >
              <div class="HotspotAnnotation">Eye</div>
            </div>
            <div
              class="hotspot"
              slot="hotspot-2"
              data-surface="0 0 19604 19625 19592 0.272 0.160 0.568"
              data-visibility-attribute="visible"
            >
              <div class="HotspotAnnotation">Claw</div>
            </div>
            <div
              class="hotspot"
              slot="hotspot-3"
              data-surface="0 0 9509 9227 9676 0.515 0.260 0.225"
              data-visibility-attribute="visible"
            >
              <div class="HotspotAnnotation">Dactyle</div>
            </div>
            <div
              class="hotspot"
              slot="hotspot-4"
              data-surface="0 0 18906 19130 18484 0.662 0.230 0.109"
              data-visibility-attribute="visible"
            >
              <div class="HotspotAnnotation">Swimming leg</div>
            </div>
            <div
              class="hotspot"
              slot="hotspot-7"
              data-surface="0 0 549 433 218 0.510 0.193 0.297"
              data-visibility-attribute="visible"
            >
              <div class="HotspotAnnotation">Walking leg</div>
            </div>
            <div class="progress-bar hide" slot="progress-bar">
              <div class="update-bar"></div>
            </div>
            <div slot="ar-div" id="ar-div">
              View in your space
            </div>
          </>
        )}
      </model-viewer>
    </>
  );
};

export default ModelViewer;

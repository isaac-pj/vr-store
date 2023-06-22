<script>
  export let position = "0 0 -2";
  const debug = false;
</script>

<a-entity id="container" {position}>
  <!-- class="cursor active" -->
  <!-- proxy-event="event: mouseenter; to: #info;" -->
  <!-- proxy-event__off="event: mouseenter; to: #info; as: tohide;" -->
  <!-- proxy-event__on="event: mouseleave; to: #info; as: toshow;" -->
  <a-entity
    id="content"
    class="cursor active"
    animation__toleft="property: rotation; to: 0 360 0; dur: 10000; easing: linear; loop: true; autoplay: false; resumeEvents: toleft; pauseEvents: topause, toright; dir: reverse;"
    animation__toright="property: rotation; to: 0 360 0; dur: 10000; easing: linear; loop: true; autoplay: false; resumeEvents: toright; pauseEvents: topause, toleft;"
    proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme;"
    proxy-event__loaded="event: loaded; to: #overlay; as: fadein"
  >
    <slot />
  </a-entity>

  <a-plane
    class="cursor"
    height="1.8"
    width="1.2"
    rotation="-90 0 0"
    position="-0.6 0.001 0"
    proxy-event__hide="event: mouseenter; to: #info; as: tohide;"
    proxy-event__show="event: mouseleave; to: #info; as: toshow;"
    material={`visible: ${debug}; wireframe: true; color: red; shader: flat;`}
    proxy-event__resume="event: mouseenter; to: #content; as: toleft"
    proxy-event__pause="event: mouseleave; to: #content; as: topause"
    proxy-event__in="event: mouseenter; to: #rotateLeftButton;"
    proxy-event__out="event: mouseleave; to: #rotateLeftButton;"
  >
    <!-- proxy-event__off="event: mouseenter; to: #info; as: tohide;" -->
    <!-- proxy-event__on="event: mouseleave; to: #info; as: toshow;" -->
    <a-ring
      id="rotateLeftButton"
      rotation="-180 0 0"
      position="0.6 0 0.001"
      radius-inner="1.2"
      radius-outer="1"
      color="#111"
      opacity="0.2"
      theta-start="135"
      theta-length="90"
      material="shader: flat"
      animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
      animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
    >
      <a-troika-text
        class="cursor buttons"
        event-set="_event: mouseenter; color: #FAC200;"
        event-set__2="_event: mouseleave; color: #FFFFFF;"
        event-set__3="_event: click; _target: #mainCamera; camera.zoom: 1;"
        value="rotate_right"
        font="#material-icons-font"
        rotation="0 180 -106"
        position="-0.843 0.707 -0.001"
        font-size="0.100"
      />
    </a-ring>
  </a-plane>

  <a-plane
    class="cursor"
    height="1.8"
    width="1.2"
    rotation="-90 0 0"
    position="0.6 0.001 0"
    proxy-event__hide="event: mouseenter; to: #info; as: tohide;"
    proxy-event__show="event: mouseleave; to: #info; as: toshow;"
    material={`visible: ${debug}; wireframe: true; color: blue; shader: flat;`}
    proxy-event__resume="event: mouseenter; to: #content; as: toright"
    proxy-event__pause="event: mouseleave; to: #content; as: topause"
    proxy-event__in="event: mouseenter; to: #rotateRightButton;"
    proxy-event__out="event: mouseleave; to: #rotateRightButton;"
  >
    <!-- proxy-event__off="event: mouseenter; to: #info; as: tohide;" -->
    <!-- proxy-event__on="event: mouseleave; to: #info; as: toshow;" -->
    <a-ring
      id="rotateRightButton"
      rotation="-180 0 0"
      position="-0.6 0 0.001"
      radius-inner="1.2"
      radius-outer="1"
      color="#111"
      opacity="0.2"
      theta-start="315"
      theta-length="90"
      material="shader: flat"
      animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
      animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
    >
      <a-troika-text
        class="cursor buttons"
        event-set="_event: mouseenter; color: #FAC200;"
        event-set__2="_event: mouseleave; color: #FFFFFF;"
        event-set__3="_event: click; _target: #mainCamera; camera.zoom: 1;"
        value="rotate_left"
        font="#material-icons-font"
        rotation="0 180 106"
        position="0.843 0.707 -0.001"
        font-size="0.100"
      />
    </a-ring>
  </a-plane>

  <a-plane
    class="cursor"
    material={`visible: ${debug}; wireframe: true; color: yellow; shader: flat;`}
    height="1"
    width="2.1"
    rotation="-90 -90 0"
    position="0 0.002 0.15"
    proxy-event__in="event: mouseenter; to: #controlButtons;"
    proxy-event__out="event: mouseleave; to: #controlButtons;"
    proxy-event__hide="event: mouseenter; to: #info; as: tohide;"
    proxy-event__show="event: mouseleave; to: #info; as: toshow;"
  >
    <!-- proxy-event__off="event: mouseenter; to: #info; as: tohide;" -->
    <!-- proxy-event__on="event: mouseleave; to: #info; as: toshow;" -->
    <a-ring
      class="cursor"
      id="controlButtons"
      rotation="-180 0 0"
      position="-0.15 0 0.001"
      radius-inner="1.2"
      radius-outer="1"
      color="#111"
      opacity="0.2"
      theta-start="335"
      theta-length="50"
      material="shader: flat"
      animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
      animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
    >
      <a-troika-text
        class="cursor buttons"
        event-set="_event: mouseenter; color: #FAC200;"
        event-set__2="_event: mouseleave; color: #FFFFFF;"
        event-set__3="_event: click; _target: #mainCamera; camera.zoom: 1;"
        value="remove"
        font="#material-icons-font"
        rotation="0 180 -106"
        position="1.05 0.290 -0.001"
        font-size="0.100"
      />

      <a-troika-text
        class="cursor buttons"
        event-set="_event: mouseenter; color: #FAC200;"
        event-set__2="_event: mouseleave; color: #FFFFFF;"
        value="close"
        font="#material-icons-font"
        rotation="0 180 -90"
        position="1.09 0 -0.001"
        font-size="0.100"
        navigate="path: GOBACK; replace: true;"
      />

      <a-troika-text
        class="cursor"
        event-set="_event: mouseenter; color: #FAC200;"
        event-set__2="_event: mouseleave; color: #FFFFFF;"
        event-set__3="_event: click; _target: #mainCamera; camera.zoom: 1.5;"
        value="add"
        font="#material-icons-font"
        rotation="0 -180 -74"
        position="1.05 -0.290 -0.001"
        font-size="0.100"
      />
    </a-ring>
  </a-plane>
</a-entity>

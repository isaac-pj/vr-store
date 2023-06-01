<script>
  export let radius = 100;
  $: spaceRadius = radius;
  $: cameraFar = radius + 5;

  let cursorRef;

  const handleMouseAtive = ({ type, detail: { intersectedEl } }) => {
    if (!intersectedEl.classList.contains("active")) return;
    cursorRef.emit(type === "mouseenter" ? "mouseon" : "mouseoff");
  };
</script>

<a-sky {radius} src="#backgroundTexture" />

<!-- SCENE GLOBAL LIGHTS -->
<a-light type="ambient" intensity="1.2" color="#FFF" />

<a-circle
  id="ground"
  color="#bbb"
  radius={spaceRadius}
  rotation="-90 0 0"
  blending="multiply"
  shadow="cast: false; receive: true"
/>

<a-camera
  id="mainCamera"
  look-controls-enabled="true"
  wasd-controls-enabled="false"
  position="0 1.6 0"
  far="0.5"
  event-set__lookme="look-to: #lookme;"
>
  <a-plane
    id="overlay"
    shader="flat"
    color="#fff"
    opacity="1"
    position="0 0 -0.5"
    scale="1.8 1 1"
    event-set__ready={`_event: loaded; _target: #mainCamera; far: ${cameraFar};`}
    animation__fadein="property:opacity; startEvents: fadein; from: 1; to: 0; dur: 1000;"
    animation__fadeout="property:opacity; startEvents: fadeout; from: 0; to: 1; dur: 1000"
    event-set__fadein="_event: animationcomplete__fadein; visible: false;"
    event-set__fadeout="_event: fadeout; visible: true;"
  />
  <a-cursor
    id="cursor"
    animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
    animation__fusing="property: fusing; startEvents: fusing; from: 1 1 1; to: 0.1 0.1 0.1; dur: 1500"
    event-set__mouseenter="_event: mouseon; color: #ffd70a"
    event-set__mouseleave="_event: mouseoff; color: black"
    raycaster="objects: .cursor; far: 15; showLine: false;"
    bind:this={cursorRef}
    on:mouseenter={handleMouseAtive}
    on:mouseleave={handleMouseAtive}
  />
</a-camera>

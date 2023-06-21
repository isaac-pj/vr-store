<script>
  export let id;
  export let info;
  export let position;
  export let width;
  export let height;

  $: id = id;
  $: info = info;
  $: position = position;
  $: width = width;
  $: height = height;
</script>

<a-entity look-at="#mainCamera" {position}>
  <a-ring
    radius-inner="0.05"
    radius-outer="0.065"
    material="shader: flat"
    color="#FFFFFF"
  >
    <a-circle
      class="cursor active"
      proxy-event__mouseenter={`event: mouseenter; to: #dot-${id};`}
      radius="0.04"
      rotation="0 0 0"
      material="shader: flat"
      color="#1A91FE"
    />
  </a-ring>

  <a-rounded
    id={`dot-${id}`}
    class="cursor active"
    opacity="0.5"
    {width}
    {height}
    color="#ffffff"
    radius="0.1, 0.1, 0.1, 0"
    position="0.1 0.1 0"
    material="shader: flat"
    scale="0 0 0"
    pivot={{ origin: `${-(width / 2)} ${-(height / 2)} 0` }}
    animation__mouseenter-scaleup="property: scale; to: 1 1 1; dur: 200; startEvents: mouseenter;"
    animation__mouseleave-scaledown="property: scale; to: 0 0 0; dur: 200; startEvents: mouseleave;"
  >
    <!-- animation__mouseenter-fadein="property: opacity; to: 0.5; dur: 200; startEvents: mouseenter;"
    animation__mouseleave-fadeout="property: opacity; to: 0; dur: 200; startEvents: mouseleave" -->
    <a-troika-text
      position={{ x: 0, y: height / 2 - 0.1, z: 0.001 }}
      color="#272727"
      max-width={width - 0.1}
      baseline="top"
      value={info}
      font="#montserrat-regular"
      font-size="0.07"
    />
  </a-rounded>
</a-entity>

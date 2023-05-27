<script>
  export let id;
  export let route;
  export let payload;
  export let position;
  // export let target;
  // export let event;
  $: routeParams = { path: route, data: payload };
</script>

<a-plane
  {id}
  opacity="0"
  position="0 0 0"
  height="1.05"
  radius="0.05"
  scale="0 0 0"
  look-at="#mainCamera"
  animation__scaleup="property: scale; startEvents: mouseenter; to: 1 1 1; dur: 200"
  animation__scaledown="delay: 300; property: scale; startEvents: mouseleave, click; to: 0 0 0; dur: 200"
  animation__fadein="property: opacity; startEvents: mouseenter; to: 0.6; dur: 200"
  animation__fadeout="delay: 300; property: opacity; startEvents: mouseleave, click; to: 0; dur: 200"
  animation__slideup={`property: position; startEvents: mouseenter; to: ${position}; dur: 200`}
  animation__slidedown="delay: 300; property: position; startEvents: mouseleave, click; to: 0 0 0; dur: 200"
>
  <c-text value="Beatle" position="-0.4 0.40 0.01" weight="700" />
  <c-text value="Classic Fabric Armchair" position="-0.4 0.23 0.01" width="4" />
  <c-text value="$899.00" position="-0.4 0.15 0.01" width="6" weight="600" />

  <a-plane
    class="cursor"
    material="shader: flat"
    color="#444357"
    radius="0.05"
    position="0 -0.1 0.01"
    width="0.8"
    height="0.2"
    text="value: SEE MORE; width: 1.6; align: center; letterSpacing: 10px; yOffset: 0.01;"
    montserrat="weight: 700"
    navigate={routeParams}
  />
  <a-plane
    material="shader: flat"
    color="#FAC200"
    position="0 -0.35 0.01"
    width="0.8"
    height="0.2"
    text="value: GET THIS; width: 1.6; align: center; letterSpacing: 10px; yOffset: 0.01; color: #272727;"
    montserrat="weight: 700"
  />
</a-plane>

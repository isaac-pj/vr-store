<script>
  export let label;
  export let ref = "";
</script>

<a-plane
  {ref}
  width="3"
  height="1"
  class="cursor menu-item"
  montserrat="weight: 700"
  material="shader: flat; visible: false"
  sound="on: mouseenter; src: #click-sound; volume: 2"
  text={`value: ${label?.toUpperCase()}; color: #272727; align: center; width: 10; letterSpacing: 10px; yOffset: 0.05; zOffset: 0.01;`}
  look-at="#mainCamera"
  animation__mouseenter-textcolor="property: text.color; to: #FFFFFF; dur: 300; startEvents: mouseenter"
  animation__mouseleave-textcolor="property: text.color; to: #272727; dur: 300; startEvents: mouseleave"
  route="path: /list;"
/>

<script>
  export let label;
  export let ref = "";
</script>

<!-- material="shader: flat; visible: false" -->
<a-troika-text
  {ref}
  color="#272727"
  class="cursor buttons"
  value={label?.toUpperCase()}
  animation__mouseenter-textcolor="property: color; to: #FFFFFF; dur: 300; startEvents: mouseenter"
  animation__mouseleave-textcolor="property: color; to: #272727; dur: 300; startEvents: mouseleave"
  sound="on: mouseenter; src: #click-sound; volume: 1; positional: false;"
  font="#montserrat-regular"
  curve-radius="10"
  font-size="0.8"
  navigate="path: /list;"
  look-at="#circleLayout"
/>

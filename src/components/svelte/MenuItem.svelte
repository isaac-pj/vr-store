<script>
  export let label;
  export let category;
</script>

<!-- material="shader: flat; visible: false" -->
<a-troika-text
  color="#272727"
  class="cursor buttons"
  value={label?.toUpperCase()}
  animation__mouseenter-textcolor="property: color; to: #FFFFFF; dur: 300; startEvents: mouseenter"
  animation__mouseleave-textcolor="property: color; to: #272727; dur: 300; startEvents: mouseleave"
  sound="on: mouseenter; src: #click-sound; volume: 1; positional: false;"
  font="#montserrat-semibold"
  curve-radius="10"
  font-size="0.5"
  letter-spacing="0.2"
  navigate={`path: /search-list?filter=${category || "empty"};`}
  look-at="#circleLayout"
/>

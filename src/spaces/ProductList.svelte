<script>
  import Product from "../components/svelte/Product.svelte";

  const teste = e => {
    console.log(e);
  };
</script>

<c-light
  type="directional"
  color="#FFFFF0"
  target="#container"
  position="2 4 1"
/>

<a-cylinder
  position="0 1.5 -7"
  radius="4.2"
  height="3"
  color="#999"
  shadow="cast: false; receive: true; "
  segments-radial="72"
/>

<a-entity
  id="lookme"
  position="0 0 -2"
  proxy-event__loaded="event: loaded; to: #overlay; as: fadein"
/>
<!-- proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme" -->

<a-entity
  position="0 0 -7"
  layout="type: circle; plane: xz; radius: 5;"
  rotation="0 -90 0"
>
  <a-entity>
    <a-box
      class="cursor"
      wrapper="pivot: bottom"
      proxy-event__1="event: mouseenter; to: #activeRing;"
      material="visible: true; wireframe: true; color: lightgreen; shader: flat; wireframeLinewidth: 2"
      proxy-event__2="event: mouseleave; to: #activeRing;"
    >
      <Product
        model="armchair"
        pivot="bottom"
        position="0 0 0"
        rotation="0 90 0"
      />
    </a-box>
    <a-circle
      class="cursor"
      id="activeRing"
      position="0 0.001 0"
      rotation="90 0 0"
      material="side: back"
      radius="1"
      scale="0 0 0"
      animation__enter="property: opacity; startEvents: mouseenter; to: 0.2; dur: 200;"
      animation__leave="property: opacity; startEvents: mouseleave; to: 0; dur: 200;"
      animation__scaleup="property: scale; startEvents: mouseenter; to: 1 1 1; dur: 200;"
      animation__scaledown="property: scale; startEvents: mouseleave; to: 0 0 0; dur: 200;"
    >
      <a-ring
        opacity="0.2"
        scale="1 1 1"
        position="0 0 -0.001"
        radius-inner="1"
        radius-outer="0.85"
        color="#111"
        segments-theta="64"
        material="shader: flat"
      />
    </a-circle>
  </a-entity>
</a-entity>

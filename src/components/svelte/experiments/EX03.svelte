<!-- TEST 3 - Rendering curved text in a-cylinder with html shader and html interaction -->

<script>
  let active = false;

  AFRAME.registerComponent("update-repeat", {
    dependencies: ["material"],

    init: function () {
      var texture = this.el.components.material.material.map;
      texture.repeat = new THREE.Vector2(-1, 1);
      texture.needsUpdate = true;
    },
  });

  const handleHover = () => (active = !active);
</script>

<a-cylinder
  id="curved-plane"
  class="cursor"
  theta-length="15"
  theta-start={180 - 15 / 2}
  open-ended="true"
  radius="10"
  side="double"
  color="white"
  position="0 1.5 8"
  material="shader: html; fps: 6; target: #texture; side: back; width: 800; height: 500; transparent: true;"
  scale="-1 1 1"
  updaterepeat
  on:mouseenter={handleHover}
  on:mouseleave={handleHover}
>
  <div id="texture" class:active>
    <h1>HELLO HELLO</h1>
    <p>curvy text</p>
  </div>
</a-cylinder>

<style>
  #texture {
    width: 100%;
    height: 100%;
    padding: 32px;
    overflow: hidden;
    opacity: 0;
    /* position: fixed; */
    /* left: 0px; */
    /* top: 0px; */
    /* z-index: -1; */
  }

  #texture.active {
    color: #fac200;
  }

  h1 {
    position: relative;
    font-size: 72px;
  }

  p {
    position: relative;
    font-size: 48px;
  }
</style>

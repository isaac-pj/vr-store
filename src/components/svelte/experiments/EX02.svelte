<!-- TEST 2 - Rendering a curved text  -->

<script>
</script>

<!-- (FAIL) TEST 2.1 - a-text in a-curvedimage  -->
<a-curvedimage
  position="0 0.5 0"
  theta-length="45"
  theta-start={180 - 45 / 2}
  color="white"
  text="value: BUTTON ; color: #272727; align: center; width: 10; letterSpacing: 10px; yOffset: 0.05; zOffset: 0.01;"
/>

<!-- (PASS) TEST 2.2 - a-curvedimage with html shader and template html -->
<a-curvedimage
  position="0 1.5 0"
  theta-length="45"
  theta-start={180 - 45 / 2}
  color="white"
  material="shader: html; target: #texture; side: back; width: 800; height: 500; transparent: true;"
  scale="-1 1 1"
>
  <div id="texture">
    <h1>HELLO HELLO</h1>
    <p>curvy text</p>
  </div>
</a-curvedimage>

<style>
  #texture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding: 16px;
    opacity: 0;
    /* background-color: red; */
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

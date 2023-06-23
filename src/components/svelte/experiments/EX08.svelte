<!-- TEST 8 - Rendering html shader and html interaction -->
<script>
  // import { onMount } from "svelte";
  // onMount(() => (render = true));

  $: render = false;
</script>

<a-plane
  width="2"
  height="1"
  position="0 1.5 -1"
  color="white"
  material="shader: html; target: #texture; side: front; transparent: true; fps: 12"
  class="cursor active"
  on:loaded={() => (render = true)}
>
  <div id="texture" class:render>
    <div class="container">
      <div>
        <h1>Main Title</h1>
        <h5>this is a subtitle</h5>
      </div>
    </div>
  </div>
</a-plane>

<style>
  #texture {
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: hidden;
    /* padding: 16px; */
  }

  #texture.render {
    opacity: 1;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-family: sans-serif;
  }

  .container > div {
    background-color: darkgray;
    padding: 64px;
  }

  h1 {
    font-size: 6rem;
    text-align: center;
  }
  h5 {
    font-size: 2rem;
    text-align: center;
  }

  h5:hover {
    color: red;
  }
</style>

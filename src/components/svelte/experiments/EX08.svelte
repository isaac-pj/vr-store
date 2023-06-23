<a-xyinput class="cursor active" position="0 1.8 -2" scale="0.5 0.5 0.5" />
<a-xykeyboard class="cursor active" position="0 1 -2" distance="2" />

<!-- <a-plane position="0 0 -2" color="gray" /> -->
<!-- <a-plane position="0 2 -2" color="gray">
  <a-xycontainer position="0 0 0.001">
    <a-plane color="purple" origin="-0.5 -0.1 0" height="0.2">
      <c-troika
        value="Olá como vai você"
        max-width="1"
        font-size="0.1"
        baseline="bottom"
        variants="font: montserrat;"
      />
    </a-plane>
    <a-rounded color="red" width="0.2" height="0.2" />
    <a-rounded color="yellow" width="0.2" height="0.2" />
    <a-rounded color="green" width="0.2" height="0.2" />
  </a-xycontainer>
</a-plane> -->

<!-- <script>
  import { onMount } from "svelte";
  // import Keyboard from "simple-keyboard";
  // import swipe from "swipe-keyboard";

  // CSS
  // import "simple-keyboard/build/css/index.css";

  let keyboard;
  onMount(() => {
    // keyboard = new Keyboard("simple-keyboard", {
    //   onChange: input => onChange(input),
    //   onKeyPress: button => onKeyPress(button),
    //   useMouseEvents: true,
    //   modules: [swipe],
    // });
  });

  /**
   * Update simple-keyboard when input is changed directly
   */

  function onChange(input) {
    // inputRef.value = input;
    console.log("Input changed", input);
  }

  function onKeyPress(button) {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  }

  function handleShift() {
    let currentLayout = keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    keyboard.setOptions({
      layoutName: shiftToggle,
    });
  }
</script>

<a-plane
  width="2"
  height="1"
  position="0 1 -1"
  color="white"
  material="shader: html; target: #texture; side: front; transparent: true; fps: 12"
  class="cursor active"
>
  <div id="texture">
    <div class="keyboardContainer">
      <div class="simple-keyboard" />
    </div>
  </div>
</a-plane>


<style>
  @import "simple-keyboard/build/css/index.css";

  #texture {
    width: 100%;
    height: 100%;
    opacity: 0;
    /* overflow: hidden; */
    /* padding: 16px; */
  }

  .keyboardContainer {
    width: 100%;
    height: 100%;
    background-color: blue;
  }

  .keyboardContainer > .simple-keyboard {
    width: 100%;
    height: 400px !important;
    background-color: red;
  }

  /* .simple-keyboard.hg-theme-default {
    height: 600px;
  } */

  /* .simple-keyboard.hg-theme-default .hg-row .hg-button {
    height: 48px;
  } */
</style> -->

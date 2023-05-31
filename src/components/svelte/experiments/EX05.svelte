<!-- TESTE 05 - Rendering curved text with canvas 2D -->

<script>
  import { onMount } from "svelte";

  onMount(() => {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.font = "22px sans-serif";
    ctx.fillText("Lorem ipsum dolor sit amet", 0, 45);
  });
</script>

<a-curvedimage
  position="0 2 0"
  src="#myCanvas"
  radius="2"
  theta-length="45"
  rotation="0 160 0"
>
  <canvas id="myCanvas" />
</a-curvedimage>

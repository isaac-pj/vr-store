<script>
  export let id = "";
  export let label = "button";
  export let color = "#272727";
  export let background = "#FAC200";
  export let position = "0 0 0";
  export let width = 0.8;
  export let height = 0.2;
  export let onClick = () => {};

  $: id = id;
  $: label = label;
  $: color = color;
  $: background = background;
  $: position = position;
  $: width = width;
  $: height = height;
  $: onClick = onClick;
</script>

<a-plane
  {id}
  {position}
  {width}
  {height}
  class="cursor"
  class:active={onClick}
  color={background}
  shadow="cast: true; receive: true;"
  material="shader: flat"
  on:click={onClick}
  on:keydown={() => {}}
>
  <c-troika
    {color}
    max-width={width}
    align="center"
    baseline="center"
    letter-spacing={0.2}
    depth-offset={-1}
    font-size="0.07"
    value={label.toUpperCase()}
    variants="font: montserrat; weight: 700;"
  />
</a-plane>
<!-- montserrat="weight: 700" -->
<!-- troika-text={`value: ${label.toUpperCase()}; max-width: ${width}; align: center; letterSpacing: 0.2; color: ${color}; font-size: 0.07; depthOffset: -1;`} -->

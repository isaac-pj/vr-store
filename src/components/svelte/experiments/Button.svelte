<script>
  export let id = "";
  export let label = "button";
  export let color = "#272727";
  export let background = "#FAC200";
  export let position = "0 0 0";
  export let onClick = () => {};

  $: id = id;
  $: label = label;
  $: color = color;
  $: background = background;
  $: position = position;
  $: onClick = onClick;
</script>

<a-plane
  {id}
  {position}
  color={background}
  text={`value: ${label.toUpperCase()}; width: 1.6; align: center; letterSpacing: 10px; yOffset: 0.01; color: ${color};`}
  shadow="cast: true; receive: true;"
  material="shader: flat"
  montserrat="weight: 700"
  width="0.8"
  height="0.2"
  on:click={onClick}
  on:keydown={() => {}}
/>

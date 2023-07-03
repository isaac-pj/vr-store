<script>
  export let id = "";
  export let name = "add";
  export let color = "#000000";
  export let size = "1";
  export let position = "0 0 0";
  export let rotation = "0 0 0";
  export let scale = "1 1 1";

  $: id = id;
  $: name = name;
  $: color = color;
  $: size = size;
  $: position = position;
  $: rotation = rotation;
  $: scale = scale;
</script>

<a-troika-text
  {id}
  value={name}
  {color}
  font="#material-icons-font"
  font-size={size}
  {position}
  {rotation}
  {scale}
/>

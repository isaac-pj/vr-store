<script>
  import Mybox from "./Mybox.svelte";
  // props, convertd to dash case on WebComponent, e.g. shirt-color
  export let skinColor = "burlywood";
  export let shirtColor = "seagreen";
  export let pantsColor = "slateblue";
  // computed variables
  $: skinMaterial = { color: skinColor, roughness: 0.9 };
  $: shirtMaterial = { color: shirtColor };
  $: pantsMaterial = { color: pantsColor };
  const limbs = [-1, 1];
</script>

<Mybox boxColor="green" boxScale="0.3 0.3 0.3" boxPosition="0 2 0" />
<a-entity
  class="head"
  position={{ x: 0, y: 1.6, z: 0 }}
  geometry={{ primitive: "sphere", radius: 0.2 }}
  material={skinMaterial}
  shadow
/>
<a-entity
  class="body"
  position={{ x: 0, y: 1.05, z: 0 }}
  geometry={{ primitive: "cylinder", radius: 0.25, height: 0.7 }}
  material={shirtMaterial}
  shadow
>
  <!-- loops -->
  {#each limbs as side (side)}
    <a-entity
      class="arm"
      position={{ x: side * 0.3, y: 0.05, z: 0 }}
      rotation={{ x: 0, y: 0, z: side * 30 }}
      geometry={{ primitive: "cylinder", radius: 0.1, height: 0.7 }}
      material={shirtMaterial}
      shadow
    />
  {/each}
</a-entity>
{#each limbs as side (side)}
  <a-entity
    class="leg"
    position={{ x: side * 0.1, y: 0.35, z: 0 }}
    rotation={{ x: 0, y: 0, z: side * 10 }}
    geometry={{ primitive: "cylinder", radius: 0.15, height: 0.7 }}
    material={pantsMaterial}
    shadow
  />
{/each}

<script>
  import Popup from "../components/svelte/Popup.svelte";
  import Product from "./../components/svelte/Product.svelte";
  import { livingRoomSceneData } from "./../data/livingroom.scene.data.js";

  const { products } = livingRoomSceneData;
</script>

<a-entity
  id="wall"
  gltf-model="#wall-3d"
  scale="1 1 1"
  position="0 0 -4.5"
  shadow="receive: true; cast: true"
  proxy-event__loaded="event: model-loaded; to: #overlay; as: fadein"
>
  <a-entity id="lookme" position="3 0 0" />
  <c-light type="directional" color="#FFFFF0" target="#wall" position="1 3 3" />
</a-entity>

{#each products as { id, name, pivot, position, rotation } (id)}
  <Product
    model={name}
    {pivot}
    {position}
    {rotation}
    event="mouseenter"
    target={`#popup-${name}`}
    debug={true}
  >
    <Popup
      id={`popup-${name}`}
      route="/product-details"
      payload={{ product: name }}
    />
  </Product>
{/each}

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
  proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme;"
>
  <a-entity id="lookme" position="0 1.05 0" />
  <c-light
    type="directional"
    color="#FFFFF0"
    target="#wall"
    position="2 3 3"
    bias="-0.00017"
  />
</a-entity>

{#each products as { id, name, pivot, position, rotation, price, popup } (id)}
  <Product
    model={name}
    {pivot}
    {position}
    {rotation}
    event="mouseenter"
    target={`#popup-${name}`}
    debug={false}
  >
    <Popup
      id={`popup-${name}`}
      route="/product-details"
      payload={{ productId: id }}
      position={popup.position}
      title={popup.title}
      subtitle={popup.subtitle}
      {price}
    />
  </Product>
{/each}

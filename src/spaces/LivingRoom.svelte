<script>
  import { positions } from "aframe";
  import Popup from "../components/svelte/Popup.svelte";
  import Product from "./../components/svelte/Product.svelte";
  import { livingRoomSceneData } from "./../data/livingroom.scene.data.js";

  const coordinates = AFRAME.utils.coordinates;

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

{#each products as { id, name, pivot, position, rotation, popup } (id)}
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
      position={popup.position}
      rotation={popup.rotation}
    >
      <!-- route="/product-details" -->
      <!-- payload={{ productId: id }} -->
      <!-- look-at="#circleLayout" -->
      <!-- frame -->
      <!-- postion={{
        ...coordinates.parse(popup.position),
        x: coordinates.parse(popup.position).x - 1,
      }} -->

      <a-entity
        flex-container="flexDirection: horizontal; justifyContent: center;"
      >
        <a-plane width="0.2" height="0.2" material="visible: false;">
          <a-circle
            animation__pulse="loop: true; property: scale; to: 0 0 0; dir: alternate; dur: 500;"
            radius="0.04"
            material="shader: flat"
            color="#FAC200"
          >
            <a-circle
              position="0 0 0.001"
              radius="0.01"
              material="shader: flat"
              color="#FFFFFF"
            />
          </a-circle>
        </a-plane>
        <a-plane
          width="0.2"
          height="0.2"
          material="visible: false;"
          frame="pivot: -0.1, 0;"
        >
          <a-troika-text
            align="left"
            anchor="align"
            class="cursor active"
            value={popup.title}
            color="#272727"
            depth-offset="-1"
            variants="font: montserrat; weight: 700;"
            animation__mouseenter-textcolor="property: color; to: #FFFFFF; dur: 300; startEvents: mouseenter"
            animation__mouseleave-textcolor="property: color; to: #272727; dur: 300; startEvents: mouseleave"
            sound="on: mouseenter; src: #click-sound; volume: 1; positional: false;"
            navigate={{ path: "/product-details", data: { productId: id } }}
            outline-color="#B0B0B0"
            outline-offset-x="0.005"
            outline-offset-y="0.005"
            outline-blur="0.010"
          />
        </a-plane>
      </a-entity>
    </Popup>
  </Product>
{/each}

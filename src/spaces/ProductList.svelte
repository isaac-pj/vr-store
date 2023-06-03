<script>
  import queryString from "query-string";

  import Product from "../components/svelte/Product.svelte";
  import { livingRoomSceneData } from "../data/livingroom.scene.data";
  const { products } = livingRoomSceneData;

  let queryParams = queryString.parse(window.location.search);
  $: queryParams = queryParams;

  let searchResult = products.filter(({ categories }) =>
    categories.includes(queryParams.filter)
  );
</script>

<c-light
  type="directional"
  color="#FFFFF0"
  target="#container"
  position="2 4 1"
/>

<a-cylinder
  position="0 1.4 -25"
  radius="20"
  height="2.8"
  color="#999"
  shadow="cast: false; receive: true; "
  segments-radial="72"
/>

<a-entity
  id="lookme"
  position="0 0 -2"
  proxy-event__loaded="event: loaded; to: #overlay; as: fadein"
/>
<!-- proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme" -->

<a-entity
  position="0 0 -25"
  layout="type: circle; plane: xz; radius: 21;"
  rotation="0 -90 0"
>
  {#each searchResult as { id, name, pivot, box } (id)}
    <a-entity>
      {#if name}
        <a-box
          class="cursor active"
          wrapper={{ pivot, selector: `#${name}` }}
          material="visible: true; wireframe: true; color: lightgreen; shader: flat;"
          proxy-event__1={`event: mouseenter; to: #active-${name};`}
          proxy-event__2={`event: mouseleave; to: #active-${name};`}
          rotation="0 90 0"
          position={`0 ${pivot === "center" ? box.height / 2 : 0} 0`}
          navigate={{ path: "/product-details", data: { productId: id } }}
        >
          <Product model={name} pivot="center" />
        </a-box>
      {:else}
        <a-box color="gray" />
      {/if}

      <a-circle
        id={`active-${name}`}
        class="cursor active"
        position="0 0.001 0"
        rotation="-90 0 0"
        material="side: front; visible: false; wireframe: true; color: purple;"
        radius="1"
        scale="0 0 0"
        animation__enter="property: opacity; startEvents: mouseenter; to: 0.2; dur: 200;"
        animation__leave="property: opacity; startEvents: mouseleave; to: 0; dur: 200;"
        animation__scaleup="property: scale; startEvents: mouseenter; to: 1 1 1; dur: 200;"
        animation__scaledown="property: scale; startEvents: mouseleave; to: 0 0 0; dur: 200;"
      >
        <a-ring
          opacity="0.2"
          scale="1 1 1"
          position="0 0 0.001"
          radius-inner="1"
          radius-outer="0.85"
          color="#111"
          segments-theta="64"
          material="shader: flat; side: back;"
        />
      </a-circle>
    </a-entity>
  {/each}
</a-entity>

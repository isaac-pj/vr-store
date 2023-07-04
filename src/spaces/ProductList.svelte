<script>
  import Product from "../components/svelte/Product.svelte";
  import { livingRoomSceneData } from "../data/livingroom.scene.data";
  import { querystring } from "svelte-spa-router";
  const { products } = livingRoomSceneData;

  $: queryParams = new URLSearchParams($querystring);
  $: searchResult = products.filter(({ categories }) => categories.includes(queryParams.get("filter")));

  $: scrollPos = -90;

  const scollListRight = () => {
    scrollPos += 10;
  };
  const scollListLeft = () => {
    scrollPos -= 10;
  };
</script>

<c-light type="directional" color="#FFFFF0" target="#container" position="2 4 1" />

<a-cylinder
  position="0 1.4 -25"
  radius="20"
  height="2.8"
  color="#999"
  shadow="cast: false; receive: true; "
  segments-radial="72"
/>

<a-entity id="lookme" position="0 0 -2" proxy-event__loaded="event: loaded; to: #overlay; as: fadein" />
<!-- proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme" -->

<a-entity position="0 0 -25" layout="type: circle; plane: xz; radius: 21; angle: 10;" rotation={`0 ${scrollPos} 0`}>
  {#each searchResult as { id, name, pivot, box } (id)}
    <a-entity>
      {#if name}
        <a-box
          class="cursor active"
          wrapper={{ pivot, selector: `#${name}` }}
          material="visible: false; wireframe: true; color: lightgreen; shader: flat;"
          proxy-event__1={`event: mouseenter; to: #active-${name};`}
          proxy-event__2={`event: mouseleave; to: #active-${name};`}
          rotation="0 90 0"
          position={`0 ${pivot === "center" ? box.height / 2 : 0} 0`}
          navigate={{ path: "/product-details/" + id }}
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

<a-plane
  class="cursor active"
  color="#111"
  opacity="0.2"
  rotation="-90 0 0"
  position="-0.6 0.001 -2.5"
  scale="0.5 0.5 0.5"
  animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
  animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
  proxy-event__enter="event: mouseenter; to: #icon-left;"
  proxy-event__leave="event: mouseleave; to: #icon-left;"
  on:click={scollListRight}
  on:keyup={() => {}}
/>
<a-troika-text
  id="icon-left"
  color="#FFFFFF"
  animation__enter="property: color; startEvents: mouseenter; to: #FAC200; dur: 200;"
  animation__leave="property: color; startEvents: mouseleave; to: #FFFFFF; dur: 200;"
  value="rotate_left"
  font="#material-icons-font"
  position="-0.6 0.0015 -2.5"
  rotation="-90 0 0"
  font-size="0.25"
/>

<a-plane
  class="cursor active"
  color="#111"
  opacity="0.2"
  rotation="-90 0 0"
  position="0 0.001 -2.5"
  scale="0.5 0.5 0.5"
  animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
  animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
  proxy-event__enter="event: mouseenter; to: #icon-close;"
  proxy-event__leave="event: mouseleave; to: #icon-close;"
  navigate="path: GOBACK;"
/>
<a-troika-text
  id="icon-close"
  color="#FFFFFF"
  animation__enter="property: color; startEvents: mouseenter; to: #FAC200; dur: 200;"
  animation__leave="property: color; startEvents: mouseleave; to: #FFFFFF; dur: 200;"
  value="close"
  font="#material-icons-font"
  position="0 0.0015 -2.5"
  rotation="-90 0 0"
  font-size="0.25"
/>

<a-plane
  class="cursor active"
  color="#111"
  opacity="0.2"
  rotation="-90 0 0"
  position="0.6 0.001 -2.5"
  scale="0.5 0.5 0.5"
  animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
  animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
  proxy-event__enter="event: mouseenter; to: #icon-right;"
  proxy-event__leave="event: mouseleave; to: #icon-right;"
  on:click={scollListLeft}
  on:keyup={() => {}}
/>
<a-troika-text
  id="icon-right"
  color="#FFFFFF"
  animation__enter="property: color; startEvents: mouseenter; to: #FAC200; dur: 200;"
  animation__leave="property: color; startEvents: mouseleave; to: #FFFFFF; dur: 200;"
  value="rotate_right"
  font="#material-icons-font"
  rotation="-90 0 0"
  position="0.6 0.0015 -2.5"
  font-size="0.25"
/>

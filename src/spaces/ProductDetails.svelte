<script>
  import Container from "../components/svelte/Container.svelte";
  // import { onMount } from "svelte";
  // import { useHistory } from "svelte-routing";
  import Product from "../components/svelte/Product.svelte";
  import { livingRoomSceneData } from "./../data/livingroom.scene.data.js";

  const { products } = livingRoomSceneData;

  export let product = "";

  // let historyState;
  // onMount(() => (historyState = history.state));

  const { productId } = history.state;

  const findProduct = productId => {
    if (!productId) return;
    return products.find(({ id }) => id === productId);
  };

  const getPosition = product => {
    return `0 ${product.pivot === "center" ? product.box.height / 2 : 0} 0`;
  };

  $: product = product || findProduct(productId);
</script>

<a-entity id="lookme" position="0 0 -2" />

<c-light
  type="directional"
  color="#FFFFF0"
  target="#container"
  automatic="#container"
  position="2 4 1"
  bias="-0.00015"
/>

<Container>
  <Product
    model={product.name}
    pivot={product.pivot}
    position={getPosition(product)}
    rotation="0 0 0"
    debug={false}
  />
</Container>

<!-- <a-plane
  id="info"
  class="cursor"
  color="#fff"
  opacity="0.2"
  material="shader: flat; visible: true;"
  height="1.4"
  width="1.2"
  rotation="0 0 0"
  position="1.8 1.4 -1.8"
  animation__enter="property: opacity; startEvents: mouseenter; to: 0.5; dur: 200;"
  animation__leave="property: opacity; startEvents: mouseleave; to: 0.2; dur: 200;"
  animation__hide="property: visible; startEvents: tohide; to: false; dur: 400;"
  animation__show="property: visible; startEvents: toshow; to: true; dur: 400;"
  look-at="#mainCamera"
>
  <c-text value="Beatle" position="-0.51 0.5 0.01" weight="700" width="16" />
  <c-text value="Classic Fabric Armchair" position="-0.5 0.3 0.01" width="5" />
  <c-text value="$899.00" position="-0.5 0.15 0.01" width="7" weight="700" />

  <c-text
    value="Apresentamos a elegante \nPoltrona Beatle de linho Azul \ncom Pés de Madeira, \numa peça de mobiliário que \ncombina estilo e conforto \npara transformar sua casa."
    position="-0.5 -0.2 0.01"
    width="4"
    weight="400"
  />
</a-plane> -->

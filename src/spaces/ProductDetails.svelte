<script>
  import Container from "../components/svelte/Container.svelte";
  import DotInfo from "../components/svelte/DotInfo.svelte";
  // import { onMount } from "svelte";
  // import { useHistory } from "svelte-routing";
  import Product from "../components/svelte/Product.svelte";
  import Button from "../components/svelte/Button.svelte";
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
  <!-- wrapper={false} -->
  <Product
    active={false}
    model={product.name}
    pivot={product.pivot}
    position={getPosition(product)}
    rotation="0 0 0"
    debug={false}
  >
    <!-- "Pintura em aluminio eletroestático de alta resistencia para maior durabilidade" -->
    <!-- position="0.300 0.450 0.030" -->
    {#each product.info.details as { message, position, width = 1, height = 0.6 }, index}
      <DotInfo
        id={`${product.name}-${index}`}
        {position}
        info={message}
        {width}
        {height}
      />
    {/each}
  </Product>
</Container>

<a-plane
  width="3"
  height="2"
  opacity="0"
  color="#fff"
  class="cursor"
  position="3 1.5 -1.8"
  material="shader: flat; visible: true;"
  look-at="#mainCamera"
>
  <a-plane
    id="info"
    cascade="props: opacity, outline-opacity; value: 1;"
    animation__show="delay: 500; property: cascade.value; startEvents: toshow; to: 1; dur: 200;"
    animation__hide="delay: 500; property: cascade.value; startEvents: tohide; to: 0; dur: 200;"
    position="-1.5 1 0.001"
    width="3"
    height="2"
    origin="-1.5 1 0"
    material="shader: flat; color: red; wireframe: true; visible: false;"
  >
    <!-- cascade="property: opacity; value: 0" -->
    <!-- position="1.5 2.5 -1.8" -->
    <!-- animation__hide="property: visible; startEvents: tohide; to: false; dur: 400;" -->
    <!-- animation__show="property: visible; startEvents: toshow; to: true; dur: 400;" -->

    <c-troika
      position="0.1 -0.1 0.01"
      value={product.popup.title}
      font-size="0.3"
      weight="700"
    />

    <!-- max-width={2 - 0.1} -->

    <c-troika
      position="0.1 -0.4 0.01"
      value={product.popup.subtitle}
      font-size="0.15"
      weight="500"
      color="#666"
    />

    <c-troika
      position="0.1 -0.7 0.01"
      value={`R$ ${product.price}`}
      outline-color="#B0B0B0"
      outline-offset-x="0.005"
      outline-offset-y="0.005"
      outline-blur="0.010"
      color="#FAC200"
      weight="700"
    />

    <!-- position={{ x: 0, y: height / 2 - 0.1, z: 0.001 }} -->

    <c-troika
      position="0.1 -1 0.01"
      value={product.info.description}
      font-size="0.1"
      max-width={3 - 0.1}
    />

    <!-- class="active" -->
    <!-- class:cursor={isReady} -->
    <!-- navigate={routeParams} -->

    <Button
      label="GET THIS"
      position="0.5 -1.6 0.01"
      color="#FFFFFF"
      background="#444357"
      onClick={() => console.log("teste 01")}
    />
    <Button label="BUY NOW" position="1.4 -1.6 0.01" />
  </a-plane>
</a-plane>

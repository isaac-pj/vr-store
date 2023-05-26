<script>
  import { Router, Route } from "svelte-routing";
  import Ambience from "./components/svelte/Ambience.svelte";
  import LivingRoom from "./spaces/LivingRoom.svelte";
  import Experiments from "./spaces/Experiments.svelte";
  import ProductDetails from "./spaces/ProductDetails.svelte";
</script>

<a-scene shadow="type: pcf" mixin="global-proxy-router">
  <!-- IMPORT ASSETS -->
  <a-assets preload="auto">
    <!-- IMAGES -->
    <img
      alt="background"
      id="backgroundTexture"
      crossorigin="anonymous"
      src="./build/assets/images/360/background.jpg"
    />

    <!-- 3D OBJECTS -->
    <a-asset-item
      id="armchair-3d"
      src="./build/assets/models/scene_01/Armchair.gltf"
    />
    <a-asset-item id="lamp-3d" src="./build/assets/models/scene_01/Lamp.gltf" />
    <a-asset-item id="rug-3d" src="./build/assets/models/scene_01/Rug.gltf" />
    <a-asset-item
      id="table-3d"
      src="./build/assets/models/scene_01/Table.gltf"
    />
    <a-asset-item id="wall-3d" src="./build/assets/models/scene_01/Wall.gltf" />
    <a-asset-item
      id="painting-3d"
      src="./build/assets/models/scene_01/Painting.gltf"
    />
    <a-asset-item
      id="plant-3d"
      src="./build/assets/models/scene_01/Plant.gltf"
    />

    <!-- AUDIOS -->
    <audio
      id="click-sound"
      crossorigin="anonymous"
      src="https://cdn.aframe.io/360-image-gallery-boilerplate/audio/click.ogg"
    />

    <!-- MIXINS -->
    <a-mixin
      id="global-proxy-router"
      proxy-event__routechange-camera="event: routechange; to: #mainCamera;"
      proxy-event__fadein-overlay="event: fadein; to: #overlay;"
      proxy-event__fadeout-overlay="event: fadeout; to: #overlay;"
    />

    <!-- FONTS -->
    <a-asset-item
      id="material-icons-font"
      src="./build/assets/fonts/icons/MaterialIconsOutlined-Regular.otf"
    />
  </a-assets>

  <c-menu />

  <Router>
    <Route path="/" component={LivingRoom} />
    <Route path="/living-room" component={LivingRoom} />
    <Route path="/product-details" component={ProductDetails} />
    <Route path="/experiments" component={Experiments} />
  </Router>

  <Ambience radius={200} />
</a-scene>

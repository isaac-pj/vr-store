// NPM COMPONENTS

import "aframe-aabb-collider-component";
import "aframe-superframe/components/event-set";
import "aframe-superframe/components/template";
import "aframe-layout-component";
import "aframe-proxy-event-component";
import "aframe-look-at-component";
import "aframe-troika-text";

// LOCAL COMPONENTS

import menu from "./components/menu/menu.js";
import ambience from "./components/ambience/ambience.js";
import product from "./components/product/product.js";
import light from "./components/commons/light.js";
import router from "./components/commons/router.js";
import lookTo from "./components/commons/look-to.js";
import montserrat from "./components/commons/montserrat.js";
import database from "./data/database.js";
import text from "./components/text/text.js";

async function start() {
  // Put your code here
}

const scene = document.querySelector("a-scene");
scene.addEventListener("loaded", start);

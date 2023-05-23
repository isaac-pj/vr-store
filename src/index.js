// NPM COMPONENTS

import "aframe-aabb-collider-component";
import "aframe-superframe/components/event-set";
import "aframe-superframe/components/template";
import "aframe-layout-component";
import "aframe-proxy-event-component";
import "aframe-look-at-component";
import "aframe-troika-text";

// LOCAL COMPONENTS

import lookTo from "./components/commons/look-to.js";
import montserrat from "./components/commons/montserrat.js";
import router from "./components/commons/router.js";
import wrapper from "./components/commons/wrapper.js";
import children from "./components/commons/children";

// EXTENDS COMPONENT

import light from "./primitives/extends/light.js";
import text from "./primitives/extends/text.js";

// CUSTOM PRIMITIVES

import menu from "./primitives/menu/menu.js";
import ambience from "./primitives/ambience/ambience.js";
import product from "./primitives/product/product.js";
import mybox from "./primitives/mybox/mybox.js";
import popup from "./primitives/popup/popup.js";

// DATABASE COMPONENT

import database from "./data/database.js";

async function start() {
  // Put your code here
}

const scene = document.querySelector("a-scene");
scene.addEventListener("loaded", start);

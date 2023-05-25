// LIBRARIES

import "aframe";
import "mustache";
import "../public/global.css";

// NPM COMPONENTS

import "aframe-aabb-collider-component";
import "aframe-superframe/components/event-set";
import "aframe-superframe/components/template";
import "aframe-layout-component";
import "aframe-proxy-event-component";
import "aframe-look-at-component";
import "aframe-troika-text";

// CUSTOM COMPONENTS

import "./components/aframe/look-to.js";
import "./components/aframe/montserrat.js";
import "./components/aframe/router.js";
import "./components/aframe/wrapper.js";
import "./components/aframe/children";

// EXTENDS COMPONENTS

import "./primitives/extends/light.js";
import "./primitives/extends/text.js";

// CUSTOM PRIMITIVES

import "./primitives/menu/menu.js";
import "./primitives/ambience/ambience.js";
import "./primitives/product/product.js";
import "./primitives/mybox/mybox.js";
import "./primitives/popup/popup.js";

// SVELTE COMPONENTS

import registerSvelteComponents from "./register";
registerSvelteComponents();

import App from "./App.svelte";

let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new App({
    target: document.body || document.querySelector("#app"),
    props: {},
  });
});

export default app;

// GLOBAL STYLES

import "../public/global.css";

// LIBRARIES

import "aframe";
import "mustache";

// NPM COMPONENTS

import "aframe-aabb-collider-component";
import "aframe-superframe/components/event-set";
import "aframe-superframe/components/template";
import "aframe-superframe/components/layout";
import "aframe-proxy-event-component";
import "aframe-look-at-component";
import "aframe-troika-text";
import "aframe-html-shader";

// CUSTOM COMPONENTS

import "./components/aframe/look-to.js";
import "./components/aframe/montserrat.js";
import "./components/aframe/navigate.js";
import "./components/aframe/wrapper.js";
import "./components/aframe/children";

// EXTENDS COMPONENTS

import "./primitives/extends/light.js";
import "./primitives/extends/text.js";

// CUSTOM PRIMITIVES

import "./primitives/mybox/mybox.js";

// CUSTOM GEOMETRIES

import "./geometries/bevel.js";

// SVELTE COMPONENTS

import registerWebComponents from "./register";
registerWebComponents();

import App from "./App.svelte";

let app = null;
document.addEventListener("DOMContentLoaded", () => {
  app = new App({
    target: document.body || document.getElementById("#app"),
    props: {},
  });
});

export default app;

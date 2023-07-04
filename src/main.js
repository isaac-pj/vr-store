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
import "aframe-xylayout";

// CUSTOM COMPONENTS

import "./components/aframe/look-to";
import "./components/aframe/navigate";
import "./components/aframe/wrapper";
import "./components/aframe/children";
import "./components/aframe/pivot";
import "./components/aframe/variants";
import "./components/aframe/origin";
import "./components/aframe/cascade";
import "./components/aframe/frame";
import "./components/aframe/flex-layout";
// import "./components/aframe/button";
// import "./components/aframe/keyboard";
// import "./components/aframe/input";
// import "./components/aframe/label";
// import "./components/aframe/resize";

// EXTENDS COMPONENTS

import "./primitives/extends/light.js";
import "./primitives/extends/text.js";
import "./primitives/extends/troika.js";

// CUSTOM PRIMITIVES

import "./primitives/mybox/mybox.js";
import "./primitives/a-bevel.js";
import "./primitives/a-rounded.js";

// CUSTOM GEOMETRIES

import "./geometries/bevel.js";
import "./geometries/rounded.js";

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

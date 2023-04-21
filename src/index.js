// NPM COMPONENTS

import "aframe-aabb-collider-component";
import "aframe-event-set-component";
import "aframe-template-component";
import "aframe-layout-component";
import "aframe-proxy-event-component";

// LOCAL COMPONENTS

import menu from "./components/menu/menu.js";
import camera from "./components/camera/camera.js";
import illumination from "./components/illumination/illumination.js";
import sky from "./components/sky/sky.js";
import product from "./components/product/product.js";
import livingRoom from "./scenes/living-room/living-room.js";

function start() {
  // Put your code here
  // const livingRoom = document.querySelector("s-living-room");
  // livingRoom.addEventListener("templaterendered", function () {
  //   const products = document.querySelectorAll("c-product");
  //   products.forEach(product => {
  //     product.addEventListener("hitstart", function (event) {
  //       console.log(event);
  //     });
  //     product.addEventListener("hitend", function (event) {
  //       console.log(event);
  //     });
  //   });
  // });
}

const scene = document.querySelector("a-scene");
scene.addEventListener("loaded", start);

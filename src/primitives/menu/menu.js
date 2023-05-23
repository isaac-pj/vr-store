import menuRing from "../menu-ring/menu-ring.js";
import menuItem from "../menu-item/menu-item.js";

export default AFRAME.registerPrimitive("c-menu", {
  defaultComponents: {
    template: {
      src: "./build/primitives/menu/menu.html",
    },
  },
});

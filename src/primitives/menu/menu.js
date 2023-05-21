import menuRing from "../menu-ring/menu-ring.js";
import menuItem from "../menu-item/menu-item.js";

AFRAME.registerPrimitive("c-menu", {
  defaultComponents: {
    template: {
      src: "./primitives/menu/menu.html",
    },
  },
});

import { waitFor } from "../../utils/general";
import { push, pop, replace } from "svelte-spa-router";

const GOBACK = "GOBACK";

export default AFRAME.registerComponent("navigate", {
  schema: {
    path: { type: "string", default: GOBACK },
    event: { type: "string", default: "click" },
    data: { type: "string", default: "" },
    replace: { type: "boolean", default: false },
    // params: { type: "string", default: "" },
  },
  init: async function () {
    const { event, path, data } = this.data;

    this.el.addEventListener(event, () => {
      this.updateRoute(path, data);
    });
  },
  updateRoute: function (path, data) {
    if (window.location.hash?.includes(path)) return;
    const sceneEl = this.el.sceneEl;
    sceneEl.emit("fadeout");

    waitFor(500).then(() => {
      if (path === GOBACK) {
        pop();
      } else if (replace) {
        replace(path);
      } else {
        push(path);
      }
      sceneEl.emit("fadein");
    });
  },
});

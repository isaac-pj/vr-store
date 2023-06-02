import { waitFor } from "../../utils/general";
import { navigate } from "svelte-routing";

const GOBACK = "GOBACK";

export default AFRAME.registerComponent("navigate", {
  schema: {
    path: { type: "string", default: GOBACK },
    event: { type: "string", default: "click" },
    data: { type: "string", default: "" },
    replace: { type: "boolean", default: false },
  },
  init: async function () {
    const { event, path, data } = this.data;

    this.el.addEventListener(event, () => {
      this.updateRoute(path, data);
    });
  },
  updateRoute: function (path, data) {
    if (location.pathname === path) return;
    const sceneEl = this.el.sceneEl;
    sceneEl.emit("fadeout");

    waitFor(500).then(() => {
      if (path === GOBACK) {
        history.back();
      } else {
        navigate(path, { state: data });
      }
      sceneEl.emit("fadein");
    });
  },
});

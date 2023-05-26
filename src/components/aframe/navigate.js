import { waitFor } from "../../utils/general";
import { navigate } from "svelte-routing";

export default AFRAME.registerComponent("navigate", {
  schema: {
    path: { type: "string" },
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
    const sceneEl = this.el.sceneEl;
    sceneEl.emit("fadeout");
    waitFor(500).then(() => {
      navigate(path, { state: data });
      sceneEl.emit("fadein");
    });
  },
});

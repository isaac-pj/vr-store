import { waitFor } from "../../utils/general";

export default AFRAME.registerComponent("wrapper", {
  schema: {
    selector: { type: "string", default: "" },
    pivot: { type: "string", default: "center" },
  },
  init: function () {
    const self = this;
    const { pivot, selector } = this.data;

    const wrapper = this.el;
    const target = selector
      ? document.querySelector(selector)
      : wrapper?.firstElementChild;
    const isGltfModel = target?.hasAttribute("gltf-model");

    if (!target) return;

    async function boundingBoxUpdate() {
      await waitFor(100);
      const boundingBox = new THREE.Box3();

      boundingBox.setFromObject(this?.object3D || target?.object3D);

      const { min, max } = boundingBox;

      const width = max.x - min.x;
      const height = max.y - min.y;
      const depth = max.z - min.z;

      const offset = height / 2;

      const wrapperGeometry = wrapper.getAttribute("geometry");
      wrapper.setAttribute("geometry", {
        ...wrapperGeometry,
        width,
        height,
        depth,
      });
      self.handlePivot(pivot, wrapper, target, offset);
    }

    if (isGltfModel) {
      target.addEventListener("model-loaded", boundingBoxUpdate);
    } else {
      boundingBoxUpdate();
    }
  },
  handlePivot: function (pivot, wrapper, target, offset) {
    const offsetReverse = offset * -1;
    const wrapperPosition = wrapper.getAttribute("position");
    const targetPosition = target.getAttribute("position");

    switch (pivot) {
      case "top":
        wrapper.setAttribute("position", {
          ...wrapperPosition,
          y: offsetReverse,
        });
        target.setAttribute("position", { ...targetPosition, y: offset });
        break;
      case "bottom":
        wrapper.setAttribute("position", { ...wrapperPosition, y: offset });
        target.setAttribute("position", {
          ...targetPosition,
          y: offsetReverse,
        });
        break;
      case "center":
        // no offset
        break;
      default:
        // no offset
        break;
    }

    this.el.emit("wrapped", {});
  },
});

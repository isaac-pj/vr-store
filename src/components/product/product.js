import { waitFor } from "../../utils/general";

AFRAME.registerComponent("wrapper", {
  schema: {
    selector: { type: "string", default: "" },
    pivot: { type: "string", default: "center" },
  },
  init: function () {
    const self = this;
    const { pivot, selector } = this.data;

    const wrapper = this.el;
    const target = selector ? document.querySelector(selector) : wrapper?.firstElementChild;
    const isGltfModel = target?.hasAttribute("gltf-model");

    if (!target) return;

    async function boundingBoxUpdate() {
      await waitFor(100);
      const { boxMin, boxMax } = this.components["aabb-collider"];

      const width = Number((boxMax.x - boxMin.x).toFixed(3));
      const height = Number((boxMax.y - boxMin.y).toFixed(3));
      const depth = Number((boxMax.z - boxMin.z).toFixed(3));

      const offset = height / 2;

      const wrapperGeometry = wrapper.getAttribute("geometry");
      wrapper.setAttribute("geometry", { ...wrapperGeometry, width, height, depth });
      self.handlePivot(pivot, wrapper, target, offset);
    }

    if (target && isGltfModel) {
      target.addEventListener("model-loaded", boundingBoxUpdate);
    }
  },
  handlePivot: (pivot, wrapper, target, offset) => {
    const offsetReverse = offset * -1;
    const wrapperPosition = wrapper.getAttribute("position");
    const targetPosition = target.getAttribute("position");

    switch (pivot) {
      case "top":
        wrapper.setAttribute("position", { ...wrapperPosition, y: offsetReverse });
        target.setAttribute("position", { ...targetPosition, y: offset });
        break;
      case "bottom":
        wrapper.setAttribute("position", { ...wrapperPosition, y: offset });
        target.setAttribute("position", { ...targetPosition, y: offsetReverse });
        break;
      case "center":
        // no offset
        break;
      default:
        // no offset
        break;
    }
  },
});

AFRAME.registerPrimitive("c-product", {
  defaultComponents: {
    template: {
      src: "./components/product/product.html",
    },
  },
  mappings: {},
});

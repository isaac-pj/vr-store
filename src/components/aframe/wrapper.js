import { waitFor } from "../../utils/general";

export default AFRAME.registerComponent("wrapper", {
  schema: {
    selector: { type: "string", default: "" },
    pivot: { type: "string", default: "center" },
    enabled: { type: "boolean", default: true },
  },
  init: function () {
    const { selector, enabled } = this.data;

    if (!enabled) return;

    const wrapper = this.el;
    const target = selector
      ? document.querySelector(selector)
      : wrapper?.firstElementChild;

    const isGltfModel = target?.hasAttribute("gltf-model");

    if (!target) return;

    if (isGltfModel) {
      target.addEventListener(
        "model-loaded",
        this.boundingBoxUpdate.bind(this, target, wrapper)
      );
    } else {
      this.boundingBoxUpdate(target, wrapper);
    }
  },
  boundingBoxUpdate: async function (target, wrapper) {
    const { pivot } = this.data;

    await waitFor(100);
    const boundingBox = new THREE.Box3();

    boundingBox.setFromObject(target?.object3D);

    const { min, max } = boundingBox;

    const width = max.x - min.x;
    const height = max.y - min.y;
    const depth = max.z - min.z;

    // console.log({
    //   width: Number(width.toFixed(6)),
    //   height: Number(height.toFixed(6)),
    //   depth: Number(depth.toFixed(6)),
    // });

    const offset = height / 2;

    const wrapperGeometry = wrapper.getAttribute("geometry");
    wrapper.setAttribute("geometry", {
      ...wrapperGeometry,
      width,
      height,
      depth,
    });
    this.handlePivot(pivot, wrapper, target, offset);
  },
  handlePivot: function (pivot, wrapper, target, offset) {
    const offsetReverse = offset * -1;
    const wrapperPosition = wrapper.getAttribute("position");
    const targetPosition = target.getAttribute("position");

    switch (pivot) {
      case "top":
        wrapper.setAttribute("position", {
          ...wrapperPosition,
          y: wrapperPosition.y + offsetReverse,
        });
        target.setAttribute("position", {
          ...targetPosition,
          y: offset,
        });
        break;
      case "bottom":
        wrapper.setAttribute("position", {
          ...wrapperPosition,
          y: wrapperPosition.y + offset,
        });
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

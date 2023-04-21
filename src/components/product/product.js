import { waitFor } from "../../utils/general";

AFRAME.registerComponent("wrapper", {
  schema: { selector: { type: "string", default: null } },
  init: function () {
    const self = this;

    this.el.firstElementChild.addEventListener(
      "model-loaded",
      async function () {
        await waitFor(1000);
        const { boundingBox } = this.components["aabb-collider"];
        const { max, min } = boundingBox;

        const width = Number((max.x - min.x).toFixed(3));
        const height = Number((max.y - min.y).toFixed(3));
        const depth = Number((max.z - min.z).toFixed(3));
        const offset = height / 2 + min.y;
        const offSetReverse = (height / 2) * -1;

        const geometry = self.el.getAttribute("geometry");
        const position = self.el.getAttribute("position");
        const pos = this.getAttribute("position");
        self.el.setAttribute("geometry", { ...geometry, width, height, depth });
        self.el.setAttribute("position", { ...position, y: offset });
        this.setAttribute("position", { ...pos, y: offSetReverse });

        console.log(this.components["aabb-collider"]);
        // console.log(geometry);
        // console.log(p1, p2);
        // console.log(this, self.el);
      }
    );
  },
});

AFRAME.registerPrimitive("c-product", {
  defaultComponents: {
    // geometry: { primitive: "box" },
    template: {
      src: "./components/product/product.html",
    },
  },
  mappings: {},
});

import { waitFor } from "../../utils/general";

AFRAME.registerComponent("wrapper", {
  schema: {
    selector: { type: "string", default: null },
    pivot: { type: "string", default: "center" },
    // pivot: { type: "vec3", default: { x: 0, y: 0, z: 0 } },
  },
  init: function () {
    const self = this;
    const { pivot, selector } = this.data;

    this.el.firstElementChild.addEventListener(
      "model-loaded",
      async function () {
        await waitFor(1000);
        const { boxMin, boxMax, boxCenter } = this.components["aabb-collider"];

        const width = Number((boxMax.x - boxMin.x).toFixed(3));
        const height = Number((boxMax.y - boxMin.y).toFixed(3));
        const depth = Number((boxMax.z - boxMin.z).toFixed(3));

        const offset = height / 2;
        const offsetReverse = (height / 2) * -1;

        const geometry = self.el.getAttribute("geometry");
        const position = self.el.getAttribute("position");
        const pos = this.getAttribute("position");

        self.el.setAttribute("geometry", { ...geometry, width, height, depth });

        switch (pivot) {
          case "top":
            self.el.setAttribute("position", { ...position, y: offsetReverse });
            this.setAttribute("position", { ...pos, y: offset });
            break;
          case "center":
            break;
          case "bottom":
            self.el.setAttribute("position", { ...position, y: offset });
            this.setAttribute("position", { ...pos, y: offsetReverse });
            break;
          default:
            break;
        }

        // console.log(self.data);
        // console.log(this.components["aabb-collider"]);

        // console.log(self.el.object3D);
        // console.log(THREE);
        // console.log(self.el.object3D);

        // return;
        // console.log(
        //   this.id,
        //   `${width}${width < 1 ? "cm" : "m"}`,
        //   `${height}${height < 1 ? "cm" : "m"}`,
        //   `${depth}${depth < 1 ? "cm" : "m"}`,
        //   `${offset}${offset < 1 ? "cm" : "m"}`
        // );
        //     // console.log(geometry);
        //     // console.log(p1, p2);
        //     // console.log(this, self.el);
      }
    );
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

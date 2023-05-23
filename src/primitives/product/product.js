export default AFRAME.registerPrimitive("c-product", {
  defaultComponents: {
    "template-children": "",
    template: {
      src: "./build/primitives/product/product.html",
      type: "mustache",
    },
  },
  mappings: {},
});

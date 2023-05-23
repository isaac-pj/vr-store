export default AFRAME.registerPrimitive("c-mybox", {
  defaultComponents: {
    "template-children": "",
    template: {
      src: "./primitives/mybox/mybox.html",
      type: "mustache",
    },
  },
});

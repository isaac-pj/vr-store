export default AFRAME.registerPrimitive("c-mybox", {
  defaultComponents: {
    "template-children": "",
    template: {
      src: "./build/templates/mybox.html",
      type: "mustache",
    },
  },
});

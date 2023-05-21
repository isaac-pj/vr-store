AFRAME.registerPrimitive("c-mybox", {
  defaultComponents: {
    "template-children": "",
    template: {
      src: "./components/mybox/mybox.html",
      type: "mustache",
    },
  },
});

AFRAME.registerComponent("component", {
  init: function () {
    // console.log(this.el);
  },
});

AFRAME.registerPrimitive("c-menu-ring", {
  defaultComponents: {
    template: {
      src: "./components/menu-ring/menu-ring.html",
    },
    component: {},
  },
});

AFRAME.registerComponent("raycaster-listener", {
  init: function () {
    this.el.addEventListener(
      "raycaster-intersection",
      this.onIntersection.bind(this)
    );
    this.el.addEventListener(
      "raycaster-intersection-cleared",
      this.onIntersectionCleared.bind(this)
    );
  },

  onIntersection: function (event) {
    console.log("start", event);
  },

  onIntersectionCleared: function (event) {
    console.log("end", event);
  },
});

AFRAME.registerPrimitive("c-camera", {
  defaultComponents: {
    template: {
      src: "./components/camera/camera.html",
    },
  },
});

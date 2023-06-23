export default AFRAME.registerComponent("frame", {
  schema: {
    width: { default: -1 }, // -1 : auto
    height: { default: -1 },
    pivot: { type: "vec2", default: { x: 0.5, y: 0.5 } },
  },
  update(oldData) {
    let el = this.el;
    let { width, height } = this.data;
    let geometry = el.getAttribute("geometry") || {};
    this.width =
      width < 0 ? +(el.getAttribute("width") || geometry.width || 0) : width;
    this.height =
      height < 0
        ? +(el.getAttribute("height") || geometry.height || 0)
        : height;
    if (oldData.width !== undefined) {
      el.emit("resize", { frame: this }, false);
    }
  },
});

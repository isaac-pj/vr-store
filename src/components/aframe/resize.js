export default AFRAME.registerComponent("resize", {
  dependencies: ["rect"],
  schema: {
    color: { default: "white" },
    minWidth: { default: 1 },
    minHeight: { default: 1 },
    lineWidth: { default: 3 },
    visibleAlways: { default: false },
  },
  /** @type {import("aframe").Entity} */
  _resizerEl: null,
  init() {
    let el = this.el,
      data = this.data;
    let resizerEl = (this._resizerEl = el.appendChild(
      document.createElement("a-entity")
    ));

    resizerEl.setAttribute("flex-item", { fixed: true });
    resizerEl.setAttribute("material", {
      shader: "flat",
      wireframe: true,
      wireframeLinewidth: data.lineWidth,
      color: data.color,
    });

    resizerEl.setAttribute("visible", data.visibleAlways);
    resizerEl.addEventListener("mouseenter", ev => {
      resizerEl.setAttribute("visible", true);
    });
    resizerEl.addEventListener("mouseleave", ev => {
      resizerEl.setAttribute("visible", data.visibleAlways);
    });

    this._onResized = this._onResized.bind(this);
    el.addEventListener("resize", this._onResized);
  },
  update() {
    this._onResized();
  },
  _onResized() {
    let d = 0.2;
    let rect = this.el.components.rect;
    this._resizerEl.setAttribute("position", {
      x: rect.width / 2 + d,
      y: -rect.height / 2 - d,
      z: 0.01,
    });
  },
  remove() {
    this.el.removeEventListener("resize", this._onResized);
    this.el.removeChild(this._resizerEl);
  },
});

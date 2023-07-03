AFRAME.registerComponent("label", {
  dependencies: ["rect"],
  schema: {
    value: { default: "" },
    color: { default: "white" },
    align: { default: "left" },
    wrapCount: { default: 0 },
    xOffset: { default: 0 },
    zOffset: { default: 0.01 },
    resolution: { default: 32 },
    renderingMode: { default: "auto", oneOf: ["auto", "canvas"] },
  },
  init() {
    // TODO: removeEventListener
    this.el.addEventListener("resize", ev => this.update());
  },
  update() {
    let data = this.data;
    let el = this.el;
    let value = data.value;
    let widthFactor = 0.65;
    let { width: w, height: h } = el.components.rect;
    let wrapCount = data.wrapCount;
    if (wrapCount == 0 && h > 0) {
      wrapCount = Math.max(w / h / widthFactor, value.length) + 1;
    }

    if (value == "") {
      this.remove();
      return;
    }
    if (data.renderingMode == "auto" && !/[\u0100-\uDFFF]/.test(value)) {
      let textData = Object.assign({}, data, {
        wrapCount: wrapCount,
        width: w,
        height: h,
      });
      delete textData["resolution"];
      delete textData["renderingMode"];
      el.setAttribute("text", textData);
      setTimeout(() => {
        let textObj = el.getObject3D("text");
        if (textObj) {
          textObj.raycast = () => {}; // disable raycast
        }
      }, 0);
      this._removeObject3d();
      return;
    }

    let lineHeight = data.resolution;
    let textWidth = Math.floor(lineHeight * wrapCount * widthFactor);
    let canvas = this._canvas || document.createElement("canvas");
    let font = "" + lineHeight * 0.9 + "px bold sans-serif";
    let ctx = canvas.getContext("2d");
    ctx.font = font;

    let lines = [""],
      ln = 0;
    for (let char of value) {
      if (char == "\n" || ctx.measureText(lines[ln] + char).width > textWidth) {
        lines.push("");
        ln++;
      }
      if (char != "\n") {
        lines[ln] += char;
      }
    }

    let canvasHeight = lineHeight * lines.length;
    if (
      !this._canvas ||
      this.textWidth != textWidth ||
      canvas.height != canvasHeight
    ) {
      let canvasWidth = 8;
      while (canvasWidth < textWidth) canvasWidth *= 2;
      this.remove(); // <= this._canvas = null
      this._canvas = canvas;
      canvas.height = canvasHeight;
      canvas.width = canvasWidth;
      this._textWidth = textWidth;
      let texture = (this._texture = new THREE.CanvasTexture(canvas));
      texture.anisotropy = 4;
      texture.repeat.x = textWidth / canvasWidth;
      let meshH = Math.min((w / textWidth) * canvasHeight, h);
      let mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(w, meshH),
        new THREE.MeshBasicMaterial({ map: texture, transparent: true })
      );
      mesh.position.set(data.xOffset, 0, data.zOffset);
      mesh.raycast = () => {}; // disable raycast
      el.setObject3D("label", mesh);
    }

    ctx.clearRect(0, 0, textWidth, canvasHeight);
    ctx.font = font;
    ctx.textBaseline = "top";
    ctx.textAlign = data.align;
    ctx.fillStyle = data.color;
    let x = data.align === "center" ? textWidth / 2 : 0;
    let y = lineHeight * 0.1;
    for (let line of lines) {
      ctx.fillText(line, x, y);
      y += lineHeight;
    }

    this._texture.needsUpdate = true;
  },
  remove() {
    this._removeObject3d();
    if (this.el.hasAttribute("text")) {
      this.el.removeAttribute("text");
    }
  },
  _removeObject3d() {
    let el = this.el;
    let labelObj = /** @type {THREE.Mesh} */ (el.getObject3D("label"));
    if (labelObj) {
      /** @type {THREE.MeshBasicMaterial} */ (labelObj.material).map.dispose();
      /** @type {THREE.MeshBasicMaterial} */ (labelObj.material).dispose();
      labelObj.geometry.dispose();
      el.removeObject3D("label");
      this._canvas = null;
    }
  },
  getPos(cursorPos) {
    let { text, rect } = this.el.components;
    let s = this.data.value;
    let pos = 0; // [0,1]
    if (this._canvas) {
      let ctx = this._canvas.getContext("2d");
      pos = ctx.measureText(s.slice(0, cursorPos)).width / this._textWidth;
    } else if (text) {
      let textLayout = text.geometry.layout;
      let glyphs = textLayout.glyphs;
      let numGlyph = glyphs.length;
      let p = Math.max(0, numGlyph + cursorPos - s.length); // spaces...
      let g = glyphs[Math.min(p, numGlyph - 1)];
      pos = g
        ? (g.position[0] + g.data.width * (p >= numGlyph ? 1 : 0.1)) /
          textLayout.width
        : 0;
    }
    return (pos - 0.5) * rect.width;
  },
});

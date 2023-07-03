export default AFRAME.registerComponent("input", {
  dependencies: ["label"],
  schema: {
    value: { default: "" },
    type: { default: "" },
    placeholder: { default: "" },
    caretColor: { default: "#0088ff" },
    color: { default: "black" },
    bgColor: { default: "white" },
  },
  init() {
    let data = this.data,
      el = this.el,
      xyrect = el.components.xyrect;
    let insertString = v => {
      let pos = this.cursor,
        s = el.value;
      this.cursor += v.length;
      el.value = s.slice(0, pos) + v + s.slice(pos);
    };

    Object.defineProperty(el, "value", {
      get: () => data.value,
      set: v => el.setAttribute("input", "value", "" + v),
    });

    this._caretObj = new THREE.Mesh(
      new THREE.PlaneGeometry(0.04, xyrect.height * 0.9)
    );
    el.setObject3D("caret", this._caretObj);

    XYTheme.get(el).createButton(
      xyrect.width,
      xyrect.height,
      null,
      { color: data.bgColor, hoverColor: data.bgColor },
      false,
      el
    );

    el.setAttribute("tabindex", 0);
    let oncopy = ev => {
      ev.clipboardData.setData("text/plain", el.value);
      ev.preventDefault();
    };
    let onpaste = ev => {
      insertString(ev.clipboardData.getData("text/plain"));
      ev.preventDefault();
    };
    let self = this;
    this.events = {
      click(ev) {
        el.focus();
        el.emit("xykeyboard-request", data.type);
        let intersection = ev.detail.intersection;
        if (intersection) {
          let v = intersection.uv.x;
          let min = 0,
            max = el.value.length,
            p = 0;
          while (max > min) {
            p = min + (((max - min + 1) / 2) | 0);
            if (self._caretpos(p) < v) {
              min = p;
            } else {
              max = p - 1;
            }
          }
          self._updateCursor(min);
        }
      },
      focus(ev) {
        self._updateCursor(self.cursor);
        window.addEventListener("copy", oncopy);
        window.addEventListener("paste", onpaste);
      },
      blur(ev) {
        self._updateCursor(self.cursor);
        window.removeEventListener("copy", oncopy);
        window.removeEventListener("paste", onpaste);
      },
      keypress(ev) {
        if (ev.code != "Enter") {
          insertString(ev.key);
        }
      },
      keydown(ev) {
        let pos = self.cursor,
          s = el.value;
        if (ev.code == "ArrowLeft") {
          if (pos > 0) {
            self._updateCursor(pos - 1);
          }
        } else if (ev.code == "ArrowRight") {
          if (pos < s.length) {
            self._updateCursor(pos + 1);
          }
        } else if (ev.code == "Backspace") {
          if (pos > 0) {
            self.cursor--;
            el.value = s.slice(0, pos - 1) + s.slice(pos);
          }
        }
      },
    };
  },
  update(oldData) {
    let el = this.el,
      data = this.data;
    let s = el.value,
      cursor = this.cursor,
      len = s.length;
    if (cursor > len || oldData.value == null) {
      cursor = len;
    }
    el.setAttribute("label", {
      color: s ? data.color : "#aaa",
      value:
        (data.type == "password" ? "*".repeat(len) : s) || data.placeholder,
    });
    this._caretObj.material.color = new THREE.Color(data.caretColor);
    this._updateCursor(cursor);
  },
  _updateCursor(p) {
    let caretObj = this._caretObj;
    this.cursor = p;
    caretObj.visible = false;
    if (document.activeElement == this.el) {
      setTimeout(() => {
        caretObj.position.set(this._caretpos(p), 0, 0.02);
        caretObj.visible = true;
      }, 0);
    }
  },
  _caretpos(cursorPos) {
    return this.el.components.label.getPos(cursorPos) + 0.04;
  },
});

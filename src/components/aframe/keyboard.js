export default AFRAME.registerComponent("keyboard", {
  schema: {
    distance: { default: 0.7 },
    ime: { default: false },
  },
  blocks: {
    main: {
      size: [11, 4],
      rows: [
        {
          pos: [0, 3],
          keys: [
            "qQ!",
            "wW@",
            "eE#",
            "rR$",
            "tT%",
            "yY^",
            "uU&",
            "iI*",
            "oO(",
            "pP)",
            "-_=",
          ],
        },
        {
          pos: [0, 2],
          keys: [
            "aA1",
            "sS2",
            "dD3",
            "fF4",
            "gG5",
            "hH`",
            "jJ~",
            "kK+",
            "lL[",
            ":;]",
          ],
        },
        {
          pos: [0, 1],
          keys: [
            { code: "Shift", symbols: "⇧⬆" },
            "zZ6",
            "xX7",
            "cC8",
            "vV9",
            "bB0",
            "nN{",
            "mM}",
            ",'<",
            '.">',
            "/?\\",
          ],
        },
        {
          pos: [0, 0],
          keys: [{ code: "Space", key: " ", label: "_", size: 4 }],
        },
        {
          pos: [-4.5, 0],
          keys: [
            { code: "_Fn", label: "#!" },
            { code: "HiraganaKatakana", label: "🌐" },
          ],
        },
      ],
    },
    num: {
      size: [4, 4],
      rows: [
        { pos: [0, 3], keys: ["7", "8", "9", "/"] },
        { pos: [0, 2], keys: ["4", "5", "6", "*"] },
        { pos: [0, 1], keys: ["1", "2", "3", "-"] },
        { pos: [0, 0], keys: ["0", ":", ".", "+"] },
      ],
    },
    ctrl: {
      size: [2, 4],
      rows: [
        { pos: [0, 3], keys: [{ code: "Backspace", label: "⌫", size: 2 }] },
        {
          pos: [0, 2],
          keys: [{ code: "Space", key: " ", label: "SP", size: 2 }],
        },
        { pos: [0, 1], keys: [{ code: "Enter", label: "⏎", size: 2 }] },
        { pos: [1.3, 3.5], keys: [{ code: "_Close", label: "x", size: 0.8 }] },
        {
          pos: [0, 0],
          keys: [
            { code: "ArrowLeft", label: "⇦" },
            { code: "ArrowRight", label: "⇨" },
          ],
        },
      ],
    },
  },
  init() {
    this.el.sceneEl.addEventListener("xykeyboard-request", ev =>
      this.show(ev.detail)
    );
  },
  show(type) {
    this.hide();
    let el = this.el;
    let data = this.data;
    let keySize = 0.2;
    let excludes = data.ime ? [] : ["HiraganaKatakana"];
    let blocks = this.blocks;
    let createKeys = (block, excludes = []) => {
      let pane = document.createElement("a-entity");
      let padding = keySize * 0.3;
      let size = block.size;
      pane.setAttribute("geometry", {
        primitive: "xy-rounded-rect",
        width: size[0] * keySize + padding,
        height: size[1] * keySize + padding,
      });
      pane.setAttribute("material", {
        color: "#222233",
      });
      for (let row of block.rows) {
        let keyrow = pane.appendChild(document.createElement("a-xycontainer"));
        keyrow.setAttribute("xycontainer", { direction: "row" });
        keyrow.setAttribute("position", {
          x: row.pos[0] * keySize,
          y: row.pos[1] * keySize - ((size[1] - 1) * keySize) / 2,
          z: 0.02,
        });
        for (let key of row.keys) {
          if (excludes.includes(key.code)) {
            continue;
          }
          let keyEl = keyrow.appendChild(document.createElement("a-xybutton"));
          keyEl.setAttribute("material", "visible", false);
          keyEl.setAttribute("xylabel", {
            value: key.label || "",
            align: "center",
          });
          keyEl.setAttribute("xyrect", {
            width: (key.size || 1) * keySize,
            height: keySize,
          });
          keyEl.addEventListener("mouseenter", ev =>
            keyEl.setAttribute("material", "visible", true)
          );
          keyEl.addEventListener("mouseleave", ev =>
            keyEl.setAttribute("material", "visible", false)
          );

          if (key.symbols || typeof key === "string") {
            keyEl.classList.add("xyinput-key");
            keyEl.dataset.keySymbols = key.symbols || key;
          }
          if (key.code == "_Close") {
            keyEl.classList.add("xyinput-close");
            keyEl.addEventListener("click", ev => this.hide());
          }
          keyEl.addEventListener("mousedown", ev => {
            if (document.activeElement == document.body && this._target) {
              this._target.focus();
            }
            this._target = document.activeElement;
            setTimeout(() => this._target.focus(), 0);
            ev.preventDefault();

            if (key.code == "_Fn") {
              this._updateSymbols(this._keyidx == 2 ? 0 : 2);
              return;
            }
            if (key.code == "Shift") {
              this._updateSymbols((this._keyidx + 1) % 2);
            }

            let ks = key.code ? key.key : key;
            let eventdata = {
              key: ks ? ks[this._keyidx] || ks[0] : key.code,
              code: key.code || key[0].toUpperCase(),
            };
            let emit = (name, eventdata) => {
              this._target.dispatchEvent(new KeyboardEvent(name, eventdata));
            };
            emit("keydown", eventdata);
            emit("keyup", eventdata);
            if (ks) {
              emit("keypress", eventdata);
            }
          });
        }
      }
      return el.appendChild(pane);
    };
    if (type == "number") {
      let w = blocks.num.size[0] + blocks.ctrl.size[0];
      createKeys(blocks.num);
      createKeys(blocks.ctrl).setAttribute(
        "position",
        "x",
        (w / 2 + 0.4) * keySize
      );
    } else if (type == "full") {
      let w = blocks.main.size[0] + blocks.ctrl.size[0];
      createKeys(blocks.main, excludes);
      createKeys(blocks.ctrl, ["Space"]).setAttribute(
        "position",
        "x",
        (w / 2 + 0.4) * keySize
      );
      w += blocks.ctrl.size[0] + blocks.num.size[0];
      createKeys(blocks.num).setAttribute(
        "position",
        "x",
        (w / 2 + 0.8) * keySize
      );
    } else {
      let w = blocks.main.size[0] + blocks.ctrl.size[0];
      createKeys(blocks.main, excludes);
      createKeys(blocks.ctrl, ["Space"]).setAttribute(
        "position",
        "x",
        (w / 2 + 0.4) * keySize
      );
    }
    if (data.ime) {
      let convText = el.appendChild(document.createElement("a-xylabel"));
      convText.setAttribute("xylabel", {
        color: "yellow",
        renderingMode: "canvas",
      });
      convText.setAttribute("position", {
        x: 0,
        y: 2 * keySize * 0.95,
        z: 0.03,
      });
      convText.setAttribute("xyrect", {
        width: 8 * keySize,
        height: keySize * 0.6,
      });
      convText.setAttribute("xyime", "");
    }
    el.setAttribute("xy-drag-control", "draggable", ".xyinput-close");
    this._updateSymbols(0);

    // Update position and rotation.
    let obj = el.object3D,
      position = obj.position;
    let tr = obj.parent.matrixWorld
      .clone()
      .invert()
      .multiply(el.sceneEl.camera.matrixWorld);
    let orgY = position.y;
    position.set(0, 0, -data.distance).applyMatrix4(tr);
    position.y = orgY;
    obj.rotation.y = new THREE.Euler().setFromRotationMatrix(
      tr.extractRotation(tr),
      "YXZ"
    ).y;
  },
  hide() {
    let el = this.el;
    this._target = null;
    el.removeAttribute("xy-drag-control");
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  },
  _updateSymbols(keyidx) {
    this._keyidx = keyidx;
    for (let keyEl of this.el.querySelectorAll(".xyinput-key")) {
      let s = keyEl.dataset.keySymbols;
      keyEl.setAttribute("xylabel", "value", s[keyidx] || s[0]);
    }
  },
});

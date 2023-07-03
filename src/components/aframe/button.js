export default AFRAME.registerComponent("button", {
  dependencies: ["frame"],
  schema: {
    color: { default: "" },
    hoverColor: { default: "" },
    labelColor: { default: "" },
  },
  init() {
    let el = this.el;
    let frame = el.components.frame;
    this.createButton(frame.width, frame.height, null, this.data, true, el);
  },
  createButton: function (
    width,
    height,
    parentEl,
    params,
    hasLabel,
    buttonEl,
    update = false
  ) {
    buttonEl = buttonEl || document.createElement("a-entity");
    if (buttonEl.hasAttribute("style")) {
      return buttonEl;
    }
    let getParam = p => (params && params[p]) || this.button[p];
    if (!buttonEl.hasAttribute("geometry")) {
      buttonEl.setAttribute(
        "geometry",
        Object.assign(
          {
            primitive: "xy-rounded-rect",
            width: width,
            height: height,
            radius: Math.min(width, height) * 0.1,
          },
          getParam("geometry")
        )
      );
    }
    buttonEl.setAttribute("material", { color: getParam("color") });
    if (hasLabel) {
      buttonEl.setAttribute("xylabel", { color: getParam("labelColor") });
    }
    if (!update) {
      if (parentEl) {
        parentEl.append(buttonEl);
      }
      buttonEl.classList.add(this.collidableClass);
      buttonEl.addEventListener("mouseenter", ev => {
        buttonEl.setAttribute("material", { color: getParam("hoverColor") });
        let intensity = getParam("hoverHaptic");
        if (intensity) {
          let trackedControls =
            ev.detail.cursorEl.components["tracked-controls"];
          let gamepad = trackedControls && trackedControls.controller;
          let hapticActuators = gamepad && gamepad.hapticActuators;
          if (hapticActuators && hapticActuators[0]) {
            hapticActuators[0].pulse(intensity, getParam("hoverHapticMs"));
          } else {
            // navigator.vibrate && navigator.vibrate(defparams.hoverHapticMs);
          }
        }
      });
      buttonEl.addEventListener("mouseleave", ev => {
        buttonEl.setAttribute("material", { color: getParam("color") });
      });
      buttonEl.addEventListener("xyresize", ev => {
        let r = ev.detail.xyrect;
        buttonEl.setAttribute("geometry", { width: r.width, height: r.height });
      });
    }
    return buttonEl;
  },
});

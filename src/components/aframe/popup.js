// import "./popup.html";

AFRAME.registerComponent("popup", {
  schema: {
    target: { type: "selector" },
    event: { type: "string" },
    // children: { oneOf: ["string", "selector"], default: "" },
  },
  init: function () {
    const { target, event } = this.data;

    target?.addEventListener(event, e => {
      console.log(e);
    });
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
});

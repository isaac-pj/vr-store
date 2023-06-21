const variants = {
  100: { normal: "thin", italic: "" },
  200: { normal: "extralight", italic: "" },
  300: { normal: "light", italic: "" },
  400: { normal: "regular", italic: "" },
  500: { normal: "medium", italic: "" },
  600: { normal: "semibold", italic: "" },
  700: { normal: "bold", italic: "" },
  800: { normal: "extrabold", italic: "" },
  900: { normal: "black", italic: "" },
};

export default AFRAME.registerComponent("variants", {
  schema: {
    font: { type: "string", default: "montserrat" },
    weight: {
      oneOf: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      default: 400,
    },
    style: { oneOf: ["normal", "italic"], default: "normal" },
  },
  init: function () {
    const { font, weight, style } = this.data;
    this.el.setAttribute(
      "troika-text",
      "font",
      `#${font}-${variants[weight][style]}`
    );
  },
});

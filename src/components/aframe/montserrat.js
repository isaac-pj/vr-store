const variants = {
  100: {
    normal: "../build/assets/fonts/msdf/Montserrat/Montserrat-Thin-msdf.json",
    italic: "",
  },
  200: {
    normal:
      "../build/assets/fonts/msdf/Montserrat/Montserrat-ExtraLight-msdf.json",
    italic: "",
  },
  300: {
    normal: "../build/assets/fonts/msdf/Montserrat/Montserrat-Light-msdf.json",
    italic: "",
  },
  400: {
    normal:
      "../build/assets/fonts/msdf/Montserrat/Montserrat-Regular-msdf.json",
    italic: "",
  },
  500: {
    normal: "../build/assets/fonts/msdf/Montserrat/Montserrat-Medium-msdf.json",
    italic: "",
  },
  600: {
    normal:
      "../build/assets/fonts/msdf/Montserrat/Montserrat-SemiBold-msdf.json",
    italic: "",
  },
  700: {
    normal: "../build/assets/fonts/msdf/Montserrat/Montserrat-Bold-msdf.json",
    italic: "",
  },
  800: {
    normal:
      "../build/assets/fonts/msdf/Montserrat/Montserrat-ExtraBold-msdf.json",
    italic: "",
  },
  900: {
    normal: "../build/assets/fonts/msdf/Montserrat/Montserrat-Black-msdf.json",
    italic: "",
  },
};

export default AFRAME.registerComponent("montserrat", {
  schema: {
    weight: { type: "number", default: 400 },
    style: { type: "string", default: "normal" },
  },
  init: function () {
    const { weight, style } = this.data;
    this.el.setAttribute("text", "font", variants[weight][style]);
    this.el.setAttribute(
      "text",
      "fontImage",
      variants[weight][style].replace("-msdf.json", ".png")
    );
    this.el.setAttribute("text", "negate", false);
  },
});

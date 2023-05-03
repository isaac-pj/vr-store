const variants = {
  100: {
    normal: "../assets/fonts/Montserrat/Montserrat-Thin-msdf.json",
    italic: "",
  },
  200: {
    normal: "../assets/fonts/Montserrat/Montserrat-ExtraLight-msdf.json",
    italic: "",
  },
  300: {
    normal: "../assets/fonts/Montserrat/Montserrat-Light-msdf.json",
    italic: "",
  },
  400: {
    normal: "../assets/fonts/Montserrat/Montserrat-Regular-msdf.json",
    italic: "",
  },
  500: {
    normal: "../assets/fonts/Montserrat/Montserrat-Medium-msdf.json",
    italic: "",
  },
  600: {
    normal: "../assets/fonts/Montserrat/Montserrat-SemiBold-msdf.json",
    italic: "",
  },
  700: {
    normal: "../assets/fonts/Montserrat/Montserrat-Bold-msdf.json",
    italic: "",
  },
  800: {
    normal: "../assets/fonts/Montserrat/Montserrat-ExtraBold-msdf.json",
    italic: "",
  },
  900: {
    normal: "../assets/fonts/Montserrat/Montserrat-Black-msdf.json",
    italic: "",
  },
};

AFRAME.registerComponent("montserrat", {
  schema: {
    weight: { type: "number", default: 400 },
    style: { type: "string", default: "normal" },
  },
  init: function () {
    const { weight, style } = this.data;
    this.el.setAttribute("text", "font", variants[weight][style]);
    this.el.setAttribute("text", "fontImage", variants[weight][style].replace("-msdf.json", ".png"));
  },
});

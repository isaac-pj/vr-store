export default AFRAME.registerPrimitive("c-troika", {
  dependencies: ["troika-text", "variants"],
  defaultComponents: {
    "troika-text": {
      color: "#272727",
      align: "left",
      anchor: "align",
      font: "#montserrat-regular",
    },
    variants: { weight: 400 },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-troika-text"].mappings,
    font: "variants.font",
    weight: "variants.weight",
    style: "variants.style",
  },
});

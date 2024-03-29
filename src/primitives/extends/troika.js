export default AFRAME.registerPrimitive("c-troika", {
  dependencies: ["troika-text", "variants"],
  defaultComponents: {
    "troika-text": {
      color: "#272727",
      align: "left",
      anchor: "align",
      baseline: "top",
    },
    variants: { weight: 400 },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-troika-text"].mappings,
    opacity: "troika-text.fillOpacity",
    "outline-opacity": "troika-text.outlineOpacity",
    font: "variants.font",
    weight: "variants.weight",
    style: "variants.style",
  },
});

AFRAME.registerPrimitive("c-text", {
  defaultComponents: {
    text: {
      color: "#272727",
      align: "left",
      anchor: "align",
      width: "12",
      wrapCount: "100",
      negate: "false",
    },
    montserrat: { weight: 400 },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-text"].mappings,
    weight: "montserrat.weight",
    style: "montserrat.style",
  },
});

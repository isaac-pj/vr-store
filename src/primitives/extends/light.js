AFRAME.registerPrimitive("c-light", {
  defaultComponents: {
    light: {
      castShadow: true,
      shadowBias: -0.001,
    },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-light"].mappings,
    castshadow: "light.castShadow",
    bias: "light.shadowBias",
  },
});

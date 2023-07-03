export default AFRAME.registerPrimitive("c-light", {
  defaultComponents: {
    light: {
      castShadow: true,
      shadowBias: -0.001,
      shadowCameraFar: 200,
    },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-light"].mappings,
    castshadow: "light.castShadow",
    bias: "light.shadowBias",
    radius: "light.shadowRadius",
    automatic: "light.shadowCameraAutomatic",
    "shadow-camera-far": "light.shadowCameraFar",
  },
});

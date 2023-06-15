export default AFRAME.registerPrimitive("a-rounded", {
  defaultComponents: {
    geometry: {
      primitive: "rounded",
    },
    material: {
      color: "#FFFFFF",
    },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-plane"].mappings,
    color: "material.color",
    width: "geometry.width",
    height: "geometry.height",
    radius: "geometry.radius",
    segments: "geometry.segments",
  },
});

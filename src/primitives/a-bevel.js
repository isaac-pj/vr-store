export default AFRAME.registerPrimitive("a-bevel", {
  defaultComponents: {
    geometry: {
      primitive: "bevel",
      width: 1,
      height: 1,
      depth: 1,
    },
    material: {
      color: "#FFFFFF",
    },
  },
  mappings: {
    color: "material.color",
    width: "geometry.width",
    height: "geometry.height",
    depth: "geometry.depth",
    bevel: "geometry.bevelSize",
    thickness: "geometry.bevelThickness",
    segments: "geometry.bevelSegments",
  },
});

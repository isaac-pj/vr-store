const debug = AFRAME.utils.debug;
const warn = debug("geometries:bevel:warn");

export default AFRAME.registerGeometry("bevel", {
  schema: {
    depth: { default: 1, min: 0 },
    height: { default: 1, min: 0 },
    width: { default: 1, min: 0 },
    bevelEnabled: { default: true, type: "boolean" },
    bevelThickness: { default: 0.1, min: 0 },
    bevelSize: { default: 0.1, min: 0 },
    bevelOffset: { default: 0, min: 0 },
    bevelSegments: { default: 1, min: 1 },
  },

  init: function (data) {
    const bevelSize = data.bevelSize;
    const bevelOffset = data.bevelOffset;
    const bevelThickness = data.bevelThickness;
    const bevelSegments = data.bevelSegments;
    const offset = bevelSize + bevelThickness;
    const bevelEnabled = data.bevelEnabled && this.hasValidBevel(data, offset);

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);

    const width = bevelEnabled ? data.width - offset : data.width;
    const height = bevelEnabled ? data.height - offset : data.height;
    const depth = bevelEnabled ? data.depth - offset : data.depth;

    shape.lineTo(0, height);
    shape.lineTo(width, height);
    shape.lineTo(width, 0);
    shape.lineTo(0, 0);

    const extrudeSettings = {
      steps: 1,
      depth,
      bevelEnabled,
      bevelThickness,
      bevelSize,
      bevelOffset,
      bevelSegments,
    };
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings).center();
    this.geometry = geometry;
  },
  hasValidBevel: function (data, offset) {
    const { width, height, depth } = data;

    if (width > offset && height > offset && depth > offset) return true;

    warn(
      "Invalid bevel size: " +
        offset +
        "was defined. The bevel size can not be bigger than bounding box"
    );
    return false;
  },
});

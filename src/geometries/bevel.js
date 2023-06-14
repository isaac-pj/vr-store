export default AFRAME.registerGeometry("bevel", {
  schema: {
    depth: { default: 1, min: 0 },
    height: { default: 1, min: 0 },
    width: { default: 1, min: 0 },
    bevelEnabled: { default: true, type: "boolean" },
    bevelThickness: { default: 1, min: 0 },
    bevelSize: { default: 1, min: 0 },
    bevelOffset: { default: 0, min: 0 },
    bevelSegments: { default: 1, min: 1 },
  },

  init: function (data) {
    const width = data.width;
    const height = data.height;
    const depth = data.depth;
    const bevelEnabled = data.bevelEnabled;
    const bevelThickness = data.bevelThickness;
    const bevelSize = data.bevelSize;
    const bevelOffset = data.bevelOffset;
    const bevelSegments = data.bevelSegments;

    const centerX = width / 2;
    const centerY = height / 2;
    const centerZ = depth / 2;

    const shape = new THREE.Shape();

    shape.moveTo(-centerX, -centerZ);

    shape.lineTo(-centerX, centerY);
    shape.lineTo(centerY, centerX);
    shape.lineTo(centerX, -centerY);
    shape.lineTo(-centerY, -centerX);

    const extrudeSettings = {
      steps: 1,
      depth,
      bevelEnabled,
      bevelThickness,
      bevelSize,
      bevelOffset,
      bevelSegments,
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    this.geometry = geometry;
  },
});

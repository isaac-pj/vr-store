const debug = AFRAME.utils.debug;
const warn = debug("geometries:bevel:warn");

export default AFRAME.registerGeometry("rounded", {
  schema: {
    height: { default: 1, min: 0 },
    width: { default: 1, min: 0 },
    radius: { default: 0.1, min: 0 },
    segments: { default: 8, min: 0, max: 64 },
  },

  init: function (data) {
    const segments = data.segments; // smoothness
    const width = data.width;
    const height = data.height;
    const radiusEnabled = data.radius && this.hasValidRadius(data);
    const radius = radiusEnabled ? data.radius : 0;

    // helper const's mash
    const wi = width / 2 - radius;
    const hi = height / 2 - radius;
    const w2 = width / 2;
    const h2 = height / 2;

    // helper const's UVs
    const ul = radius / width;
    const ur = (width - radius) / width;
    const vl = radius / height;
    const vh = (height - radius) / height;

    // prettier-ignore
    const vertices = [

      -wi, -h2, 0,  wi, -h2, 0,  wi, h2, 0,
      -wi, -h2, 0,  wi,  h2, 0, -wi, h2, 0,	
      -w2, -hi, 0, -wi, -hi, 0, -wi, hi, 0,
      -w2, -hi, 0, -wi,  hi, 0, -w2, hi, 0,	
      wi, -hi, 0,  w2, -hi, 0,  w2, hi, 0,
      wi, -hi, 0,  w2,  hi, 0,  wi, hi, 0

    ];

    // prettier-ignore
    // const uvs = [

    //   ul, 0, ur, 0, ur, 1,
    //   ul, 0, ur, 1, ul, 1,
    //   0, vl, ul, vl, ul, vh,
    //   0, vl, ul, vh, 0, vh,
    //   ur, vl, 1, vl, 1, vh,
    //   ur, vl, 1, vh,ur, vh

    // ];

    let phia = 0;
    let phib, xc, yc;

    for (let i = 0; i < segments * 4; i++) {
      xc = i < segments || i >= 3 * segments ? wi : -wi;
      yc = i < 2 * segments ? hi : -hi;
      phib = (Math.PI * 2 * (i + 1)) / (4 * segments);

      vertices.push(xc, yc);
      vertices.push(0, xc + radius * Math.cos(phia));
      vertices.push(yc + radius * Math.sin(phia), 0);
      vertices.push(xc + radius * Math.cos(phib));
      vertices.push(yc + radius * Math.sin(phib), 0);

      phia = phib;

      // still without  uvs ...
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // geometry.setAttribute("uv", new THREE.Float32BufferAttribute(vertices, 3));
    geometry.computeVertexNormals();

    this.geometry = geometry;
  },
  hasValidRadius: function (data) {
    const { width, height, radius } = data;

    if (width >= radius && height >= radius) return true;

    warn(
      "Invalid radius size: " +
        offset +
        " was defined. The radius size can not be bigger than height or width"
    );
    return false;
  },
});

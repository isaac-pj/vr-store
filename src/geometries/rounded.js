const debug = AFRAME.utils.debug;
const warn = debug("geometries:rounded:warn");

export default AFRAME.registerGeometry("rounded", {
  schema: {
    height: { default: 1, min: 0 },
    width: { default: 1, min: 0 },
    segments: { default: 8, min: 0, max: 64 },
    radius: {
      type: "array",
      default: [0.1],
      parse: function (value) {
        const commaRegex = /,/g;
        const whitespaceRegex = /\s+/g;
        if (!value) return Array(4).fill(this.default);
        const isString = typeof value === "string";
        const separator = value?.includes(",") ? commaRegex : whitespaceRegex;
        const radius = isString ? value.trim().split(separator) : value;
        const [A, B, C, D] = radius;

        const a = A !== undefined && A !== null ? Number(A) : undefined;
        const b = B !== undefined && B !== null ? Number(B) : undefined;
        const c = C !== undefined && C !== null ? Number(C) : undefined;
        const d = D !== undefined && D !== null ? Number(D) : undefined;

        if (a >= 0 && b >= 0 && c >= 0 && d >= 0) return [a, b, c, d];
        if (a >= 0 && !(b >= 0) && !(c >= 0) && !(d >= 0)) return [a, a, a, a];
        if (a >= 0 && b >= 0 && !(c >= 0) && !(d >= 0)) return [a, a, b, b];
        if (a >= 0 && b >= 0 && c >= 0 && !(d >= 0)) return [a, b, c];

        return [0, 0, 0, 0];
      },
    },
  },

  init: function (data) {
    const segments = data.segments; // smoothness
    const width = data.width;
    const height = data.height;

    const radiusEnabled = data.radius.length && this.hasValidRadius(data);
    const radius = radiusEnabled ? data.radius : [0, 0, 0, 0];
    const [LT = 0, RT = 0, RB = 0, LB = 0] = radius;

    const x = width / 2;
    const y = height / 2;

    const leftSquare = {
      v1: [-x, -(y - LB), 0],
      v2: [-(x - LB), -(y - LB), 0],
      v3: [-(x - LT), y - LT, 0],
      v4: [-x, -(y - LB), 0],
      v5: [-(x - LT), y - LT, 0],
      v6: [-x, y - LT, 0],
    };

    const topSquare = {
      v1: [-(x - LT), y - LT, 0],
      v2: [x - RT, y - RT, 0],
      v3: [x - RT, y, 0],
      v4: [-(x - LT), y - LT, 0],
      v5: [x - RT, y, 0],
      v6: [-(x - LT), y, 0],
    };

    const midleSquare = {
      v1: [-(x - LB), -(y - LB), 0],
      v2: [x - RB, -(y - RB), 0],
      v3: [x - RT, y - RT, 0],
      v4: [-(x - LB), -(y - LB), 0],
      v5: [x - RT, y - RT, 0],
      v6: [-(x - LT), y - LT, 0],
    };

    const rightSquare = {
      v1: [x - RB, -(y - RB), 0],
      v2: [x, -(y - RB), 0],
      v3: [x, y - RT, 0],
      v4: [x - RB, -(y - RB), 0],
      v5: [x, y - RT, 0],
      v6: [x - RT, y - RT, 0],
    };

    const bottomSquare = {
      v1: [-(x - LB), -y, 0],
      v2: [x - RB, -y, 0],
      v3: [x - RB, -(y - RB), 0],
      v4: [-(x - LB), -y, 0],
      v5: [x - RB, -(y - RB), 0],
      v6: [-(x - LB), -(y - LB), 0],
    };

    const vertices = [
      ...Object.values((LB || LT) && leftSquare).flat(),
      ...Object.values((LT || RT) && topSquare).flat(),
      ...Object.values((RT || RB) && rightSquare).flat(),
      ...Object.values((RB || LB) && bottomSquare).flat(),
      ...Object.values(midleSquare).flat(),
    ];

    let phia = 0;
    let phib, xc, yc, rds;

    for (let i = 0; i < segments * 4; i++) {
      const index = i / segments;

      if (index < 1) rds = RT;
      else if (index < 2) rds = LT;
      else if (index < 3) rds = LB;
      else rds = RB;

      xc = index < 1 || index >= 3 ? x - rds : -(x - rds);
      yc = index < 2 ? y - rds : -(y - rds);

      phib = (Math.PI * 2 * (i + 1)) / (4 * segments);

      vertices.push(xc, yc, 0);
      vertices.push(xc + rds * Math.cos(phia), yc + rds * Math.sin(phia), 0);
      vertices.push(xc + rds * Math.cos(phib), yc + rds * Math.sin(phib), 0);

      phia = phib;

      // still without  uvs ...
    }

    const geometry = new THREE.BufferGeometry();
    const position = new THREE.Float32BufferAttribute(vertices, 3);
    geometry.setAttribute("position", position);
    geometry.computeVertexNormals();

    this.geometry = geometry;
  },
  hasValidRadius: function (data) {
    const { width, height, radius } = data;

    if (radius.every(rds => width / 2 >= rds && height / 2 >= rds)) return true;

    warn(
      "Invalid radius size: " +
        radius +
        " was defined. The radius size can not be bigger than height or width"
    );
    return false;
  },
});

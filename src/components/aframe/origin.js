delete AFRAME.components["origin"];

/**
 * Set origin in el.object3D.geometry based on arbitrary vec3 defined by user.
 */
export default AFRAME.registerComponent("origin", {
  dependencies: ["position"],
  schema: { type: "vec3" },
  init: function () {
    var data = this.data;
    var el = this.el;
    var bufferGeometry = el.getObject3D("mesh").geometry;

    if (!bufferGeometry) return;

    var copyGeometry = bufferGeometry.clone();
    copyGeometry.translate(-1 * data.x, -1 * data.y, -1 * data.z);
    el.getObject3D("mesh").geometry = copyGeometry;
  },
});

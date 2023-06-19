var originalPosition = new THREE.Vector3();
var originalRotation = new THREE.Vector3();

delete AFRAME.components["pivot"];

/**
 * Wrap el.object3D within an outer group. Apply pivot to el.object3D as position.
 */
export default AFRAME.registerComponent("pivot", {
  dependencies: ["position"],

  schema: {
    origin: { type: "vec3" },
    offset: { type: "boolean", default: false },
  },

  init: function () {
    var { origin, offset } = this.data;

    var el = this.el;
    var originalParent = el.object3D.parent;
    var originalGroup = el.object3D;
    var outerGroup = new THREE.Group();

    originalPosition.copy(originalGroup.position);
    originalRotation.copy(originalGroup.rotation);

    // Detach current group from parent.
    originalParent.remove(originalGroup);
    outerGroup.add(originalGroup);

    // Set new group as the outer group.
    originalParent.add(outerGroup);

    // Set outer group as new object3D.
    el.object3D = outerGroup;

    // Apply pivot to original group.
    originalGroup.position.set(-1 * origin.x, -1 * origin.y, -1 * origin.z);

    // Offset the pivot so that world position not affected.
    // And restore position onto outer group.
    outerGroup.position.set(
      originalPosition.x + (offset ? origin.x : 0),
      originalPosition.y + (offset ? origin.y : 0),
      originalPosition.z + (offset ? origin.z : 0)
    );

    // Transfer rotation to outer group.
    outerGroup.rotation.copy(originalGroup.rotation);
    originalGroup.rotation.set(0, 0, 0);

    // Transfer scale to outer group.
    outerGroup.scale.copy(originalGroup.scale);
    originalGroup.scale.set(1, 1, 1);
  },
});

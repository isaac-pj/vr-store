var debug = AFRAME.utils.debug;
var coordinates = AFRAME.utils.coordinates;

var warn = debug("components:look-to:warn");
var isCoordinates = coordinates.isCoordinates || coordinates.isCoordinate;

delete AFRAME.components["look-to"];

/**
 * Look-to component.
 *
 * Modifies rotation to either track another entity OR do a one-time turn towards a position
 * vector.
 *
 * If tracking an object via setting the component value via a selector, look-to will register
 * a behavior to the scene to update rotation on every tick.
 */
AFRAME.registerComponent("look-to", {
  dependencies: ["look-controls"],
  schema: {
    default: "0 0 0",
    parse: function (value) {
      // A static position to look to.
      if (isCoordinates(value) || typeof value === "object") {
        return coordinates.parse(value);
      }
      // A selector to a target entity.
      return value;
    },

    stringify: function (data) {
      if (typeof data === "object") {
        return coordinates.stringify(data);
      }
      return data;
    },
  },

  init: function () {
    var target = this.data;
    var camera = this.el;

    camera.setAttribute("look-controls", { enabled: false });

    this.getVector(target).then(vector => {
      var targetPoint = this.getPoint(camera, vector);
      this.pointCamera(camera, targetPoint);
      camera.setAttribute("look-controls", { enabled: true });
    });
  },

  getVector: async function (target) {
    // Look at a position.
    if (typeof target === "object") {
      return new THREE.Vector3(target.x, target.y, target.z);
    }

    // Assume target is a string.
    // Query for the element, grab its object3D,
    // then look to the pivot point for this object
    var targetEl = await this.waitLoad(this.el.sceneEl, [target]);

    if (!targetEl) {
      warn('"' + target + '" does not point to a valid entity to look-to');
      return;
    }

    // var entityPosition = new THREE.Vector3();
    // return targetEl.object3D.getWorldPosition(entityPosition);
    return targetEl.object3D.position;
  },

  getPoint: function (camera, target) {
    var cameraPosition = new THREE.Vector3();
    camera.object3D.getWorldPosition(cameraPosition);

    var vector = new THREE.Vector3(target.x, target.y, target.z);
    vector.subVectors(cameraPosition, vector).add(cameraPosition);
    return vector;
  },

  pointCamera: function (camera, vector) {
    camera.object3D.lookAt(vector);
    camera.object3D.updateMatrix();

    var rotation = camera.getAttribute("rotation");
    camera.components["look-controls"].pitchObject.rotation.x = THREE.MathUtils.degToRad(rotation.x);
    camera.components["look-controls"].yawObject.rotation.y = THREE.MathUtils.degToRad(rotation.y);
  },

  waitLoad: async function (element, [selector, ...others], event = "loaded") {
    var el = element.querySelector(selector);
    return new Promise(resolve => {
      if (el && el.hasLoaded) resolve(el);
      element.addEventListener(
        event,
        () => {
          const el = element.querySelector(selector);
          resolve(others?.length ? this(el, others, event) : el);
        },
        { once: true }
      );
    });
  },
});

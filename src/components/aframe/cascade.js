export default AFRAME.registerComponent("cascade", {
  schema: {
    props: { type: "array" },
    value: { default: "" },
  },

  update: function () {
    var { props, value } = this.data;
    var elem = this.el;
    this.setCascade(props, value, elem);
  },
  setCascade: function (props, value, elem) {
    props.forEach(prop => elem.setAttribute(prop, value));

    if (!elem.hasChildNodes()) return;

    var children = elem.children;
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      this.setCascade(props, value, child);
    }
  },
});

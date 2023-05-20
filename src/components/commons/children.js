AFRAME.registerComponent("template-children", {
  schema: {
    // insert: { oneOf: ["before", "after", "inner", "replace"], default: "before" },
  },
  init: function () {
    // const { insert } = this.data;
    const children = this.el.firstElementChild || null;
    this.el.setAttribute("data-children", children ? children.outerHTML : "");
  },
});

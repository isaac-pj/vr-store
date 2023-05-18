import { isEmpty, waitForTemplateRender } from "../../utils/general";
import { routes } from "../../routes";
import { database } from "../../data/database";

const defaultRouteIndex = 2;
const defaultActiveRoute = routes[defaultRouteIndex];

AFRAME.registerComponent("router", {
  schema: {
    index: { type: "number", default: defaultRouteIndex },
    path: { type: "string", default: defaultActiveRoute.path },
  },
  init: async function () {
    const self = this;
    const { index } = this.data;
    this.currentActiveRoute = routes[index] ?? defaultActiveRoute;
    this.overlayEl = await waitForTemplateRender(this.el.sceneEl, ["c-ambience", "#overlay"]);

    this.el.addEventListener("templaterendered", ({ target }) => {
      if (target.id !== "router") return;
      self.overlayEl.emit("fadein", null, false);
    });

    this.el.setAttribute("template", {
      src: this.currentActiveRoute.src,
      type: this.currentActiveRoute.type,
      data: { ...database }, // set by object or component name as dataset
    });
  },
  update: function (params) {
    const { index, path } = this.data;

    if (isEmpty(params)) return;
    this.matchRoute(index, path);
  },
  matchRoute: function (index, path) {
    const self = this;
    const currentRoute = this.currentActiveRoute;
    const activeRoute = index !== defaultRouteIndex ? routes[index] : routes.find(({ path: routePath }) => routePath === path);

    if (!activeRoute || activeRoute.key === currentRoute.key) return;

    this.overlayEl.emit("fadeout", null, false);
    this.el.setAttribute("template", {
      src: activeRoute.src,
      type: activeRoute.type,
      data: { ...database },
    });

    this.currentActiveRoute = activeRoute;
    self.el.sceneEl.emit("routechange", activeRoute);
  },
});

AFRAME.registerComponent("route", {
  schema: {
    path: { type: "string" },
    event: { type: "string", default: "click" },
  },
  init: async function () {
    const { event, path } = this.data;

    this.el.addEventListener(event, () => {
      this.updateRoute(path);
    });
  },
  updateRoute: function (path) {
    const routerEl = this.el.sceneEl.querySelector("#router");
    routerEl.setAttribute("router", "path", path);
  },
});

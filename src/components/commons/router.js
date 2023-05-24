import { isEmpty, waitForTemplateRender } from "../../utils/general";
import { routes } from "../../routes";

const debug = AFRAME.utils.debug;
const warn = debug("components:look-to:warn");

const defaultRouteIndex = 0;
const defaultActiveRoute = routes[defaultRouteIndex];

export default AFRAME.registerComponent("router", {
  schema: {
    index: { type: "number", default: defaultRouteIndex },
    path: { type: "string", default: defaultActiveRoute.path },
    data: { type: "string", default: "" },
  },
  init: async function () {
    const self = this;
    const { index } = this.data;
    this.currentActiveRoute = routes[index] ?? defaultActiveRoute;
    this.overlayEl = await waitForTemplateRender(this.el.sceneEl, [
      "c-ambience",
      "#overlay",
    ]);

    this.el.addEventListener("templaterendered", ({ target }) => {
      if (target.id !== "router") return;
      self.overlayEl.emit("fadein", null, false);
    });

    this.setRoute(this.currentActiveRoute);
  },
  update: function (params) {
    const { index, path, data } = this.data;

    if (isEmpty(params)) return;
    this.matchRoute(index, path, data);
  },
  matchRoute: function (index, path, data) {
    const self = this;
    const currentRoute = this.currentActiveRoute;
    const activeRoute =
      index !== defaultRouteIndex
        ? routes[index]
        : routes.find(({ path: routePath }) => routePath === path);

    if (!activeRoute || activeRoute.key === currentRoute.key) return;

    this.overlayEl.emit("fadeout", null, false);
    this.setRoute(activeRoute);

    this.currentActiveRoute = activeRoute;
    self.el.sceneEl.emit("routechange", activeRoute);
  },
  setRoute: function (activeRoute) {
    const { data } = this.data;

    if (data) {
      activeRoute.data = data;
    }

    this.el.setAttribute("template", {
      src: activeRoute.src,
      type: activeRoute.type,
      data: this.parseData(activeRoute?.data),
    });
  },
  parseData: function (data) {
    if (!data) return "";
    if (typeof data === "object") return data;
    let parsedData = {};
    try {
      parsedData = JSON.parse(data.replaceAll("'", '"'));
    } catch (error) {
      warn('"' + data + '" the current data is not a valid json formmat');
      parsedData = {};
    }
    return parsedData;
  },
});

AFRAME.registerComponent("route", {
  schema: {
    path: { type: "string" },
    event: { type: "string", default: "click" },
    data: { type: "string", default: "" },
  },
  init: async function () {
    const { event, path, data } = this.data;

    this.el.addEventListener(event, () => {
      this.updateRoute(path, data);
    });
  },
  updateRoute: function (path, data) {
    const routerEl = this.el.sceneEl.querySelector("#router");
    routerEl.setAttribute("router", { path, data });
  },
});

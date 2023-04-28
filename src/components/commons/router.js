import { isEmpty, waitForTemplateRender } from "../../utils/general";

const defaultRouteIndex = 0;

const routes = [
  { key: "livingRoomRoute", path: "/living-room", src: "./scenes/living-room/living-room.html" },
  { key: "livingRoom2Route", path: "/living-room-2", src: "./scenes/living-room/living-room-2.html" },
];

AFRAME.registerComponent("router", {
  schema: {
    index: { type: "number" },
    path: { type: "string", default: routes[defaultRouteIndex].path },
  },
  init: async function () {
    const self = this;
    const { index, path } = this.data;
    this.overlayEl = await waitForTemplateRender(this.el.sceneEl, ["c-sky", "#overlay"]);

    this.el.addEventListener("templaterendered", ({ target }) => {
      // if (target.hasAttribute("router")) return;
      if (target.id !== "router") return;
      self.overlayEl.emit("fadein");
    });

    this.el.setAttribute("template", "src", routes[index].src);
  },
  update: function (params) {
    const { index, path } = this.data;

    if (isEmpty(params)) return;
    this.matchRoute(index, path);
  },
  matchRoute: function (index, path) {
    const activeRoute = index ? routes[index] : routes.find(({ path: routePath }) => routePath === path);
    if (!activeRoute) return;
    this.overlayEl.emit("fadeout");
    this.el.setAttribute("template", "src", activeRoute.src);
  },
});

AFRAME.registerComponent("route", {
  schema: {
    path: { type: "string" },
    event: { type: "string", default: "click" },
  },
  init: async function () {
    const self = this;
    const { event, path } = this.data;

    this.el.addEventListener(event, () => {
      // self.el.sceneEl.querySelector("[router]")?.emit("updateroute", { event, path });
      this.updateRoute(path);
    });
  },
  updateRoute: function (path) {
    const routerEl = this.el.sceneEl.querySelector("[router]");
    routerEl.setAttribute("router", "path", path);
  },
});

import { livingRoomSceneData } from "./data/livingroom.scene.data";

export const routes = [
  {
    key: "livingRoomRoute",
    path: "/living-room",
    src: "./build/spaces/living-room.html",
    type: "mustache",
    data: livingRoomSceneData,
  },
  {
    key: "productDetailsRoute",
    path: "/product-details",
    src: "./build/spaces/product-details.html",
    type: "mustache",
  },
  {
    key: "experimentsRoute",
    path: "/experiments",
    src: "./build/spaces/experiments.html",
    type: "mustache",
  },
  {
    key: "productListRoute",
    path: "/list",
    src: "./spaces/product-list.html",
    type: "mustache",
  },
];

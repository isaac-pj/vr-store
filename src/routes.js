import { livingRoomSceneData } from "./data/livingroom.scene.data";
import LivingRoom from "./spaces/LivingRoom.svelte";
import Experiments from "./spaces/Experiments.svelte";
import ProductDetails from "./spaces/ProductDetails.svelte";
import ProductList from "./spaces/ProductList.svelte";

const defaultRouteComponent = LivingRoom;
const fallbackRouteComponent = LivingRoom;

const routes = [
  {
    key: "defaultRoute",
    path: "/",
    component: defaultRouteComponent,
  },
  {
    key: "livingRoomRoute",
    path: "/living-room",
    component: LivingRoom,
    data: livingRoomSceneData,
  },
  {
    key: "productDetailsRoute",
    path: "/product-details/:productId",
    component: ProductDetails,
  },
  {
    key: "searchListRoute",
    path: "/search-list",
    component: ProductList,
  },
  {
    key: "experimentsRoute",
    path: "/experiments",
    component: Experiments,
  },
  {
    key: "fallbackRoute",
    path: "*",
    component: fallbackRouteComponent,
  },
];

export default {
  ...routes.reduce((routes, { path, component }) => ({ ...routes, [path]: component }), {}),
};

//   "/": defaultRouteComponent,
//   "/living-room": LivingRoom,
//   "/product-details/:productId": ProductDetails,
//   "/search-list": ProductList,
//   "/experiments": Experiments,
//   "*": fallbackRouteComponent,

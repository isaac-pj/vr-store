import { livingRoomSceneData } from "./data/livingroom.scene.data";
import LivingRoom from "./spaces/LivingRoom.svelte";
import Experiments from "./spaces/Experiments.svelte";
import ProductDetails from "./spaces/ProductDetails.svelte";
import ProductList from "./spaces/ProductList.svelte";

const defaultRouteComponent = LivingRoom;
const fallbackRouteComponent = LivingRoom;

export const routes = [
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
    path: "/product-details",
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

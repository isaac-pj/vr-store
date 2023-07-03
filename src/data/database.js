import { livingRoomSceneData } from "./livingroom.scene.data";

AFRAME.registerState({
  initialState: {
    // spaces: { livingRoom: { ...livingRoomSceneData } },
    ...livingRoomSceneData,
    // shoppingList: [
    //   {
    //     name: "milk",
    //     amount: 2,
    //     pos: { x: 0, y: 1, z: -2 },
    //     color: "green",
    //   },
    //   {
    //     name: "eggs",
    //     amount: 12,
    //     pos: { x: 1, y: 1, z: -2 },
    //     color: "blue",
    //   },
    // ],
    name: "Orange",
  },

  handlers: {},
});

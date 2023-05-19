import { livingRoomSceneData } from "./livingroom.scene.data";

AFRAME.registerState({
  initialState: {
    spaces: { livingRoom: { ...livingRoomSceneData } },
    name: "Orange",
  },

  handlers: {},
});

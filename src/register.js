import { registerWebComponent } from "svawc";
import APerson from "./components/svelte/APerson.svelte";
import Mybox from "./components/svelte/Mybox.svelte";

export default () => {
  registerWebComponent({
    Component: APerson,
    tagname: "a-person",
    props: ["skinColor", "shirtColor", "pantsColor"],
  });

  registerWebComponent({
    Component: Mybox,
    tagname: "a-mybox",
    props: ["boxColor", "boxScale", "boxPosition"],
  });
};

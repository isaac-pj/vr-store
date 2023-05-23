import { registerWebComponent } from 'svawc'
import APerson from "./APerson.svelte"

registerWebComponent({Component: APerson, tagname: "a-person", props: ["skinColor", "shirtColor", "pantsColor"] })

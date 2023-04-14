### Wiki

# GLTF Format

- The materials need to be Pricipled BSDF to work

- Use embeded textures for export materials

- Can edit file with any text editor

# Textures

- To preserve appearance and textures make the bake process

- Specular texture is the inverse of roughness texure

# Bake Process

- To bake texture select the object on the scene and image texture on node editor

- Error: circular dependency. To bake textures with a mutiple materials, select the images on both materials

- Bake only work on cycles render

- Use bake lab 2 to bake in packages

- Use GPU computer to render

- Disable direct and indirect lights during the bake

# Chocofur

- Adding asset only works on object mode

# Material IOR Values

- Air: 1.000
- Bubble: 1.100
- Liquid methane: 1.150
- Ice(H2O): 1.310
- Water: 1.333
- Clear Plastic: 1.400
- Glass: 1.440 - 1.900
- Light glass: 1.450
- Standart glass: 1.520
- Heavy glass: 1.650
- Obsidian: 1.480 - 1.510
- Onyx: 1.486 - 1.658
- Acrylic glass: 1.491
- Benzene: 1.501
- Crown glass: 1.510
- Jasper: 1.540
- Agate: 1.544 - 1.553
- Amethist: 1.544 - 1.553
- Salt: 1.544
- Amber: 1.550
- Quartz: 1.550
- Sugar: 1.560
- Emerald: 1.576 - 1.582
- Flint glass: 1.613
- Topaz: 1.620 - 1.627
- Jade: 1.660 - 1.680
- Saphire: 1.760
- Ruby: 1.760 - 2.419
- Cristal: 1.870
- Diamond: 2.417 - 2.541

# Use External Template

OK - Create template by default components registring a new primitive // Caution! AFRAME.registerPrimitive is deprecated
NO - Use web component to insert template by shadow DOM // Shadow Dom isn't supported
NO - Use custom elements to insert components by shadow DOM // Shadow Dom isn't supported
OK - Insert template with webpack on init step by javascript

- Custom elements V1 specification on A-Frame 1.4.0 version
- Use component from default external template of aframe
- Insert template directily in the DOM on init method of a component
- Build the index.html including the templates and components with webpack
- Create empty tags (components) on index.html that will be replaced by the template html in run time
- Make the component in js to receive params and return template html
- components using angle command liner

# Generate Component

- create a command line tool to generate component

## Exemples

# Component template literals

<!-- AFRAME.registerComponent("my-component", {
  schema: {
    color: { type: "string", default: "red" },
    size: { type: "number", default: 1 },
  },
  init: function () {
    var data = this.data;
    var el = this.el;
    var html = document.createElement("a-entity");
    html.innerHTML = `
      <a-box color="${data.color}" width="${data.size}" height="${data.size}" depth="${data.size}"></a-box>
    `;
    el.appendChild(html);
  },
}); -->

# Primitive external template

<!-- AFRAME.registerPrimitive("my-element", {
  defaultComponents: {
    template: {
      src: "./relative-path/file-name.html",
    },
  },

  mappings: {
    // Map HTML attributes to component properties
    color: "my-component.color",
    size: "my-component.size",
  },
}); -->

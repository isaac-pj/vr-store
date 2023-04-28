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

# Box wrapper in products

- use aabb-collider // do not work because boxHelper grow horizontaly when rotate in Y axis
- create box wrapper

# Generate Component

- create a command line tool to generate component

## TODO

# ideas

no - pop menu interactions (chose fonts and icons) see IKEA exemple
no- details page and product interactios
no - in scene interactions for change colors and some other props
no- top down umbrella menu
no - sections menu isometric top view
ok - router system and scene fadein transition // transition needs improvments

# code

no - analyze load performance and possible optimizations
no - change router system to allow multi routers by id // add primitive c-router
ok - wrapper component for primitive geometry

## Exemples

# Component template literals

```html
<my-component color="pink" size="2"></my-component>
```

```javascript
AFRAME.registerComponent("my-component", {
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
});
```

# Primitive external template

```html
<my-element position="0 1 -3" rotation="0 30 0"></my-element>
```

```javascript
AFRAME.registerPrimitive("my-element", {
  defaultComponents: {
    position: "0 1 -2",
    rotation: "0 45 0", // another syntax : { x: 0, y: 45, z: 0 }
    template: {
      src: "./relative-path/file-name.html",
    },
  },
});
```

# Primitive mapping attributes

```html
<my-new-element color="pink" size="2"></my-new-element>
```

```javascript
AFRAME.registerPrimitive("my-new-element", {
  defaultComponents: {
    geometry: { primitive: "box" },
    material: { color: "red" },
  },

  mappings: {
    // Map HTML attributes to component properties
    // Do not use registred component names
    // Do not use uppercase chars
    color: "material.color",
    size: "geometry.width",
    size: "geometry.height",
    size: "geometry.depth",
  },
});
```

# Set custom template data

```html
<c-product data-model="armchair" product-data="color: gray; scale: 2 2 2;" pos="0 0.123 -3.95" z="90"></c-product>
<!-- custom-data="custom"
custom="color: gray; scale: 3 3 3;" -->
```

```html
<a-entity id="${model}" class="cursor" gltf-model="#${model}-3d" scale="${scale}" shadow="receive: true; cast: true"></a-entity>
```

```javascript
AFRAME.registerComponent("product-data", {
  schema: {
    color: { type: "string" },
    scale: { type: "string" },
  },
});

AFRAME.registerPrimitive("c-product", {
  defaultComponents: {
    position: "0 0 0", // No needed because is already in all components
    rotation: { x: 0, y: 0, z: 0 },
    template: {
      src: "./components/product/product.html", // set external template
      data: "product-data", // Receive a registred component name default
    },
  },
  mappings: {
    "custom-data": "template.data",
    pos: "position",
    x: "rotation.x",
    y: "rotation.y",
    z: "rotation.z",
  },
});
```

# Extends primitive and inherit props

```html
<c-light type="directional" color="#FFFFF0" target="#wall" position="1 3 3"></c-light>
```

```javascript
AFRAME.registerPrimitive("c-light", {
  defaultComponents: {
    light: {
      castShadow: true,
      shadowBias: -0.001,
    },
  },
  mappings: {
    ...AFRAME.primitives.primitives["a-light"].mappings,
    castshadow: "light.castShadow",
    bias: "light.shadowBias",
  },
});
```

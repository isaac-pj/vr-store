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

# MSDF Fonts

- fonts need to be converted for sdf format
- Hiero SDF font tutorial [link](https://libgdx.com/wiki/tools/hiero)
- MSDF web based by Dom Mc Curdy [link](https://msdf-bmfont.donmccurdy.com/)
- command line tools [msdfgen](https://github.com/Chlumsky/msdfgen) [msdf-bmfont](https://github.com/Jam3/msdf-bmfont)

- complete charset

  a á à ă ắ ằ ẵ ẳ â ấ ầ ẫ ẩ ǎ å ǻ ä ã ą ā ả ȁ ȃ ạ ặ ậ æ ǽ b c ć ĉ č ċ ç ḉ d ď đ ḍ ḏ ð ǆ e é è ĕ ê ế ề ễ ể ě ë ẽ ė ḝ ę ē ḗ ḕ ẻ ȅ ȇ ẹ ệ ə f ƒ g ğ ĝ ǧ ġ ģ ḡ ǥ h ĥ ȟ ħ ḥ ḫ i í ì ĭ î ï ḯ ĩ į ī ỉ ȉ ȋ ị ĳ ı j ĵ ȷ k ǩ ķ l ĺ ľ ļ ł ḷ ḻ ŀ ǉ m ṃ n ń ň ñ ṅ ņ ṇ ṉ ǌ ŋ o ó ò ŏ ô ố ồ ỗ ổ ö ȫ ő õ ṍ ṏ ȭ ȱ ø ǿ ǫ ō ṓ ṑ ỏ ȍ ȏ ơ ớ ờ ỡ ở ợ ọ ộ œ p q ĸ r ŕ ř ŗ ȑ ȓ ṛ ṟ s ś ṥ ŝ š ṧ ṡ ş ṣ ṩ ș ſ ß t ť ẗ ţ ṭ ț ṯ ŧ u ú ù ŭ û ǔ ů ü ű ũ ṹ ų ū ṻ ủ ȕ ȗ ư ứ ừ ữ ử ự ụ v w ẃ ẁ ŵ ẅ x y ý ỳ ŷ ÿ ỹ ẏ ȳ ỷ ỵ z ź ž ż ẓ ǯ þ ŉ ꞌ A Á À Ă Ắ Ằ Ẵ Ẳ Â Ấ Ầ Ẫ Ẩ Ǎ Å Ǻ Ä Ã Ą Ā Ả Ȁ Ȃ Ạ Ặ Ậ Æ Ǽ B C Ć Ĉ Č Ċ Ç Ḉ D Ď Đ Ḍ Ḏ Ð Ǆ E É È Ĕ Ê Ế Ề Ễ Ể Ě Ë Ẽ Ė Ḝ Ę Ē Ḗ Ḕ Ẻ Ȅ Ȇ Ẹ Ệ Ə F G Ğ Ĝ Ǧ Ġ Ģ Ḡ Ǥ H Ĥ Ȟ Ħ Ḥ Ḫ I Í Ì Ĭ Î Ï Ḯ Ĩ İ Į Ī Ỉ Ȉ Ȋ Ị Ĳ J Ĵ K Ǩ Ķ L Ĺ Ľ Ļ Ł Ḷ Ḻ Ŀ Ǉ M Ṃ N Ń Ň Ñ Ṅ Ņ Ṇ Ṉ Ǌ Ŋ O Ó Ò Ŏ Ô Ố Ồ Ỗ Ổ Ö Ȫ Ő Õ Ṍ Ṏ Ȭ Ȱ Ø Ǿ Ǫ Ō Ṓ Ṑ Ỏ Ȍ Ȏ Ơ Ớ Ờ Ỡ Ở Ợ Ọ Ộ Œ P Q R Ŕ Ř Ŗ Ȑ Ȓ Ṛ Ṟ S Ś Ṥ Ŝ Š Ṧ Ṡ Ş Ṣ Ṩ Ș ẞ T Ť Ţ Ṭ Ț Ṯ Ŧ U Ú Ù Ŭ Û Ǔ Ů Ü Ű Ũ Ṹ Ų Ū Ṻ Ủ Ȕ Ȗ Ư Ứ Ừ Ữ Ử Ự Ụ V W Ẃ Ẁ Ŵ Ẅ X Y Ý Ỳ Ŷ Ÿ Ỹ Ẏ Ȳ Ỷ Ỵ Z Ź Ž Ż Ẓ Ʒ Ǯ Þ Ꞌ ª ǅ ǈ ǋ º 0 1 ¹ ½ ¼ 2 ² 3 ³ ¾ 4 ⁴ 5 6 7 8 9 ` ´ ^ ¯ ¨ ¸ ° © ® + ± ÷ × < = > ¬ | ¦ ~ ¤ ¢ $ £ ¥ ⁄ \_ - – — , ; : ! ¡ ? ¿ . … · \' ‘ ’ ‚ ‹ › " “ ” „ « » ( ) [ ] { } § ¶ @ \* / & # % † • ′ ″

- basic charset

  ! " # $ % & ' ( ) \* + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ \_ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ ␡

- aframe charset

  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.?!/:;,*§£$ø@+°-~#&²'{}[]|`\()=%*µ àâéèëêïîöôùüûÀÂÉÈËÊÏÎÖÔÜÛçÇ€

- BraSCII

  !"#$%&'()\*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^\_'abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬®¯°±²³'μ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖŒØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöœøùúûüýþÿ

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

# Templates

- template string is parsed even when it is commented out

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

# Svelte Components

- always properties need to defined e.g. position
- register components is a good way to define and reuse

# Generate Component

- create a command line tool to generate component

## TODO

# priority

```
ok - (details) fix render order box
ok - (details) lookat product
  ok - [BUGS] fix event set component hyphen props
  ok - [FEAT]create component look-to
  ok - [BUGS] event loaded doesn`t fire after first render
ok - (details) product text info
ok - (details) back button
ok - (details) component rotation
ok - (app) powerup templates mustache
  ok - [FEAT] interpolation
  ok - [FEAT] loop
  ok - [FEAT] conditional render
ok - (app) sotre and update state
  ok - [FEAT] data binding
  ok - [FEAT] interpolation
  ok - [FEAT] expressions
  ok - [FEAT] loop
ok - (app) render children elements
ok - (app) separate component and primitives
ok - (app) render scene elements dynamically // mustache
ok - (app) svelte migration components
ok - (app) migrate to App.svelte
ok - (app) reactive framework angular, vue, svelte
ok - (app) replace scenes by spaces
ok - (app) render children
ok - (list) create list space
ok - (app) add data to json
ok - (home) menu categories umbrella
ok - (app) add montserrat type font
ok - (home) make popup dynamic
ok - (home) increase camera overlay for wide screen
ok - (list) list products in carousel
ok - (home) search by categories
ok - (list) rotate scroll carousel // no linear

-------------------------------------------------------------

>> no - (details) dot interactions // shein and google lens visual reference

no - (app) add box size models // script to output
no - (app) add another models // convert gltf
no - (app) github page deploy

#5 ----------------------------------------------------------

no - (details) make animation rotate
  no - [FIX] fluid swap animation
  no - [FEAT] no circular buttons
  no - [FEAT] container adapt size
no - (list) adaptable content size for active ring
no - (app) add skelleton box model // pass prop loading // add animation
no - (details) parts of objects to animation

#4 ----------------------------------------------------------

no - (app) footer pie menu
no - (app) top exit pie menu
no - (app) change cursor icon to scroll // like shein change image

#2 ----------------------------------------------------------

no - (home) add new products and spaces
no - (home) keyboard and search
no - (home) keyboard swipe

#1 ----------------------------------------------------------

no - (list) add empty list feedback
no - (home) circular spaces
no - (list) circular inverse carousel
no - (home) subcetegories filter
no - (list) inifinity scroll carousel

#0 ----------------------------------------------------------

no - (app) menu sublevel with rings
no - (app) menu fallow camera and cursor in z axis
no - (app) make components reusable
no - (app) change lib query string or remove warning // use native new URLSearchParams
no - (app) await for wrapper event in case of double

```

# text

motivação
decisoes de porjeto com base no modelo escolhido

implementação
teconologia
e porcesso de desenvolvimento

catalogo de ideias

inspeção heuristica Nielsen

2 seções

projeto e
implmentação

# remember

0. organize ideas concepts and next steps
1. passar uma lista de subbscribes com seletores para ouvir o route change
2. enviar o evento para sceneEl e fazer proxy para o elemento correto
3. disparar com a api dispacth event
4. template string mesmo comentado ainda é avaliado no render
5. state component needs to be added on index html
6. fazer o usuario passar mais tempo navegando (mais conversão) mas
   sem que isso se apresente como uma clara desvantagem que seja por interess e não obrigação
7. using state bind for arrays need to be in root of initialState
8. priority zone is equador line, bottom, and by last top area
9. component pivot change the original position to compensation

# colab

no - emit event in capture phase // event set add new params
no - send data in proxy event
no - open pr to template
no - publish look to component
no - publish router component
no - colab with svawc port
no - colar or create a flexbox component layout
no - port typescript svawc
no - create a svawc command line
no - implements animationbegin\_\_hasID // need to publish
no - event-set-if baseado em condicao
no - capture phase e once in event proxy e event set
no - replace THREE.Math for THREE.MathUtils
no - mapping html shader to cylinder // no set width
no - props bigger than 3 decimals are rounded on inspect element
no - fix wireframeLinewidth // does not working
no - collumns define in circle layout
no - fix layout componente warn default value number
no - publish rounded geometry
no - PR to aframe pivot component

# ideas

no - create a component cascade to inherit props
no - create a component for auto close camera
no - add proxy events to multiple events e multiple targets
ok - data children component
no - create a rounded component with circles and plane for aframe  
no - aframe material design // publish a lib ui components based on material design guidelines for aframe
no - default values in es6 template string in template component // use tagged template literals to add default value
no - loop and conditional render in es6 template string in template component
no - custom layout on layout component
no - add delay prop to proxy-event component
no - stopEvents property on animation // leave element in current state
no - comand line tool to svawc component generate
no - pass template literals as src for template component
no - wrapper scale offset
no - offset look to me

# search

no - search for angle command line
no - custom elements native v2
no - look for react aframe
no - fix a little white stroke in icons (only in radius)
no - aframe gui lib
no - register font in FONTS
no - diference between entity, component and system
no - PR to fix aframe text
no - check native pivot component
no - generate new shader without
no - funcionamento do renderOrder depth e transparent
no - check aframe-render-order-component fot transparent elements

# next

```
ok - custom font
ok - rotation system
ok - custom text
-----------------------------------------------
no - migrate to svelte reactive by svawc
no - render camera overlay before anything else
no - use location e history in router
no - create a component to encapsulate product interactios
no - create buttons
no - render template handlebars
no - tooltip buttons
no - aframe gui
no - fork and adjust rounded component
no - create a global config file
no - look to for any object
no - update wait for template render
no - create a theme style
no - add scene fog
no - popup menu
ok - ground plane
no - join environment
no - github repo
no - interaction system
no - another products
no - search voice
no - seach catecories
no - back button
no - umbrella menu
no - animations and feedback
no - data base products
no - teleport component
no - flying menu sections
no - random poiter space
no - change product color
no - randomize similar products in space
no - add index param to route schema

```

# scenes

ok - home
ok - list
no - details
no - cart

# ideas

ok - router system and scene fadein transition // transition needs improvments
no - generate vite vanilla js
no - open PR to fix text yOffset
no - pop menu interactions (chose fonts and icons) see IKEA exemple
no - details page and product interactios
no - in scene interactions for change colors and some other props
no - top down umbrella menu
no - sections menu isometric top view
no - PR to fix hyphenized component names on event-set

# code

ok - wrapper component for primitive geometry
no - analyze load performance and possible optimizations
no - change router system to allow multi routers by id // add primitive c-router
no - generate a custom font Montserrat based // preload this on a-assets
no - check possibilities to use aframe-html-shader to render popups // https://github.com/mayognaise/aframe-html-shader

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
<c-product
  data-model="armchair"
  product-data="color: gray; scale: 2 2 2;"
  pos="0 0.123 -3.95"
  z="90"
></c-product>
<!-- custom-data="custom"
custom="color: gray; scale: 3 3 3;" -->
```

```html
<a-entity
  id="${model}"
  class="cursor"
  gltf-model="#${model}-3d"
  scale="${scale}"
  shadow="receive: true; cast: true"
></a-entity>
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
<c-light
  type="directional"
  color="#FFFFF0"
  target="#wall"
  position="1 3 3"
></c-light>
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

```plaintext
De acordo com Nielsen (1994), a usabilidade pode ser dividida em cinco fatores
sendo eles: facilidade de aprendizado (learnability), facilidade de recordação (Memorability), eficiência (Efficiency), segurança no uso (Safety) e a satisfação do usuário (Satisfaction). Nosso trabalho pretende se concentrar em apenas três deles, facilidade de aprendizado, eficiência e satisfação do usuário.

• Facilidade de Aprendizado
  – Quantidade de erros cometidos pelos usuários na primeira tentativa com o sistema
  – Quantos usuários conseguiram completar com sucesso um número x de tarefas
  – Quantas vezes um usuários solicitou ajuda durante a execução de uma tarefa
• Eficiência
  – O tempo de espera necessário para carregamento da página
  – O tempo que o usuário leva para navegar do ponto A ao ponto B na interface
  – O tempo que o usuário demora para encontrar o produto desejado
• Satisfação do usuário
  – Diante da subjetividade encontrada nesse aspecto, não serão usadas métricas quantitativas para analisar esse fator, e sim uma entrevista com um roteiro semi-estruturado, onde iremos convidar os usuários a falar sobre sua experiência com o sistema

```

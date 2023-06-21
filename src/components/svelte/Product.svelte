<script lang="js">
  export let model;
  export let event = "";
  export let target = "";
  export let position = "0 0 0";
  export let rotation = "0 0 0";
  export let pivot = "center";
  export let debug = false;
  export let wrapper = true;
  export let active = true;

  $: model = model;
  $: event = event;
  $: target = target;
  $: position = position;
  $: rotation = rotation;
  $: pivot = pivot;
  $: debug = debug;
  $: wrapper = wrapper;
  $: active = active;
</script>

<a-entity
  {position}
  {rotation}
  id={`box-${model}`}
  wrapper={{ pivot, enabled: wrapper }}
  geometry="primitive: box;"
  material={{ color: "#FAC200", wireframe: true, visible: debug }}
  event-set__ready={`_event: wrapped; class: ${active ? "cursor active" : ""};`}
  proxy-event={{ event, to: `:has(> #box-${model}) ${target}` }}
>
  <a-entity
    id={model}
    class={!active ? "cursor" : ""}
    gltf-model={`#${model}-3d`}
    shadow="receive: true; cast: true"
  />
  <slot />
</a-entity>

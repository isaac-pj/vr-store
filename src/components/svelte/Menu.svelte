<script>
  import MenuItem from "./MenuItem.svelte";
  import MenuRing from "./MenuRing.svelte";

  let circleLayoutRef;

  const handleMouseLeave = ({ target }) => {
    if (target?.id !== "umbrellaTrigger") return;
    circleLayoutRef.emit("hide");
  };
</script>

<MenuRing />
<a-sphere
  id="umbrellaMenu"
  class="cursor"
  color="#FAC200"
  material="side: double; shader: flat;"
  radius="198"
  opacity="0"
  theta-length="0"
  animation__show="property: opacity; to: 1; dur: 300; startEvents: mouseenter"
  animation__hide="property: opacity; to: 0; dur: 300; startEvents: mouseleave"
  animation__open="property: theta-length; to: 65; dur: 300; startEvents: mouseenter"
  animation__close="property: theta-length; to: 0; dur: 300; startEvents: mouseleave"
  proxy-event__show="event: animationcomplete__open; to: #circleLayout; as: show;"
  proxy-event__hide="event: animationcomplete__close; to: #circleLayout; as: hide;"
>
  <a-sphere
    id="umbrellaTrigger"
    class="cursor"
    material="side: back; shader: flat; wireframe: true; color: #f00; visible: false;"
    theta-length="59"
    radius="13"
    on:raycaster-intersected-cleared={handleMouseLeave}
  >
    <a-entity
      bind:this={circleLayoutRef}
      id="circleLayout"
      layout="type: circle; radius: 10; plane: xz; angle: 30;"
      position="0 7 0"
      rotation={`0 ${160} 0`}
      visible="false"
      event-set__show="_event: show; visible: true; _delay: 100;"
      event-set__hide="_event: hide; visible: false;"
    >
      <!-- <MenuItem label="Home" category="" /> -->
      <MenuItem label="Ambientes" category="" />
      <MenuItem label="Móveis" category="forniture" />
      <MenuItem label="Decoração" category="decoration" />
      <MenuItem label="Designers" category="" />
      <MenuItem label="Combos" category="" />
      <MenuItem label="Descontos" category="desconto" />
      <!-- <MenuItem label="Busca" category="" /> -->
      <!-- <MenuItem label="Carrinho" category="" /> -->
    </a-entity>
  </a-sphere>
</a-sphere>

<script>
  import MenuItem from "./MenuItem.svelte";
  import MenuRing from "./MenuRing.svelte";
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
  proxy-event__show="event: animationcomplete__open; to: #circleLayout; as: mouseenter; captureBubbles: true;"
  proxy-event__hide="event: mouseleave; to: #circleLayout; captureBubbles: true;"
>
  <a-sphere
    id="umbrellaMenuTrigger"
    class="cursor"
    material="side: back; shader: flat; wireframe: true; color: #f00; visible: false;"
    theta-length="59"
    radius="13"
  >
    <!-- proxy-event__mouseenter="to: #umbrellaMenu;"
  proxy-event__mouseleave="to: #umbrellaMenu;"
  proxy-event__hide="event: mouseleave; to: #circleLayout;" -->

    <!-- proxy-event__show="event: mouseenter; to: #circleLayout;" -->
    <!-- proxy-event__hide="event: animationbegin; to: #circleLayout; as: mouseleave;" -->

    <!-- class="cursor" -->
    <!-- material="color: blue; wireframe: true; open-ended: true;" -->
    <!-- geometry="primitive: cylinder; radius: 11;" -->
    <a-entity
      id="circleLayout"
      layout="type: circle; radius: 10; plane: xz;"
      position="0 7 0"
      visible="false"
      event-set__show="_event: mouseenter; visible: true; _delay: 100;"
      event-set__hide="_event: mouseleave; visible: false;"
    >
      <MenuItem label="Celulares" ref="" />
      <MenuItem label="Brinquedos" ref="" />
      <MenuItem label="Games" ref="" />
      <MenuItem label="Limpeza" ref="" />
      <MenuItem label="Moveis" ref="" />
      <MenuItem label="Roupas" ref="" />
      <MenuItem label="Beleza" ref="" />
      <MenuItem label="Saude" ref="" />
      <MenuItem label="Decoração" ref="" />
    </a-entity>
  </a-sphere>
</a-sphere>

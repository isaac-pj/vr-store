<script>
  import Icon from "../Icon.svelte";
</script>

<!-- <a-plane position="0 2 -2" color="gray">
  <a-xycontainer position="0 0 0.001">
    <a-plane color="purple" origin="-0.5 -0.1 0" height="0.2">
      <c-troika
        value="Olá como vai você"
        max-width="1"
        font-size="0.1"
        baseline="bottom"
        variants="font: montserrat;"
      />
    </a-plane>
    <a-rounded color="red" width="0.2" height="0.2" />
    <a-rounded color="yellow" width="0.2" height="0.2" />
    <a-rounded color="green" width="0.2" height="0.2" />
  </a-xycontainer>
</a-plane> -->

<!-- <a-xyinput class="cursor active" position="0 1.8 -2" scale="0.5 0.5 0.5" /> -->
<!-- <a-xykeyboard class="cursor active" position="0 1 -2" distance="2" /> -->

<a-xycontainer
  position="0 1 -4"
  width="2"
  height="2"
  direction="vertical"
  spacing="0.05"
  align-items="center"
>
  <a-plane
    position="0 0 -0.001"
    xyitem="fixed:true"
    height="2"
    width="2"
    color="#888"
  />
  <a-plane width="0.2" height="0.2" color="red" />
  <a-plane width="0.2" height="0.2" color="yellow" />
  <a-plane width="0.2" height="0.2" color="green" />
  <a-plane width="0.2" height="0.2" color="blue" />
  <a-plane width="0.2" height="0.2" color="purple">
    <Icon name="keyboard" size="0.2" position="0 0 0.001" />
  </a-plane>
</a-xycontainer>

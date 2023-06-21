<a-entity
  position="0 0.5 -3"
  geometry="primitive: bevel; bevelEnabled: true;"
  material="color: #1A91FE;"
/>

<a-box
  pivot="origin: 0.5 0 0; offset: true;"
  position="2 0.5 -3"
  material="color: gray;"
/>

<a-bevel position="-2 0.5 -3" color="#f54400" bevel="0.2" />

<!-- pivot="origin: -0.5 -0.5 0;" -->
<a-rounded
  origin="-0.5 -0.5 0;"
  position="0 2 -3"
  color="#ffffff"
  radius="0.3 0.3 0.3 0.1"
  material="color: #6020FE; wireframe: true;"
>
  <a-plane
    width="0.5"
    height="0.5"
    origin="0.25 0.25 0"
    color="blue"
    position="1 1 0"
  />
</a-rounded>

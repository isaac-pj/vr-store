<script>
  import { ICONS } from "../constants/materiaIconsCodepoints";
</script>

<a-circle
  class="cursor active"
  radius="1"
  position="0 0.001 0"
  color="#111"
  cascade="props: opacity, fill-opacity; value: 0;"
  animation__enter="property: cascade.value; startEvents: mouseenter; to: 1; dur: 200;"
  animation__leave="property: cascade.value; startEvents: mouseleave; to: 0; dur: 200;"
  opacity="0"
  scale="0.3 0.3 0.3"
  rotation="-90 0 0"
  animation__show="property: opacity; startEvents: mouseenter; to: 0.2; dur: 200;"
  animation__hide="property: opacity; startEvents: mouseleave; to: 0; dur: 200;"
  animation__scaleup="property: scale; startEvents: mouseenter; to: 1 1 1; dur: 200;"
  animation__scaledown="property: scale; startEvents: mouseleave; to: 0.3 0.3 0.3; dur: 200;"
>
  <a-entity layout="type: circle; radius: 0.8; plane: xy; angle: 30;" position="0 0 0.001" rotation="0 0 0">
    <a-troika-text value={ICONS.ACCESSIBILITY} font="#material-icons-font" />
    <a-troika-text value={ICONS.SUPPORT} font="#material-icons-font" />
    <a-troika-text value={ICONS.EMAIL} font="#material-icons-font" />
    <a-troika-text value={ICONS.ACCOUNT_BOX} font="#material-icons-font" />
    <a-troika-text value={ICONS.FACEBOOK} font="#material-icons-font" />
    <a-troika-text value={ICONS.PIN} font="#material-icons-font" />
    <a-troika-text value={ICONS.SETTINGS} font="#material-icons-font" />
  </a-entity>
</a-circle>

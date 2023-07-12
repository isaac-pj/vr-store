<script>
  import { ICONS } from "../../constants/materiaIconsCodepoints";
</script>

<a-troika-text
  value={ICONS.SHOPPING_CART}
  color="#272727"
  look-at="#circleLayout"
  curve-radius="10"
  font="#material-icons-font"
  font-size="1"
>
  <a-circle position="0.7 0.7 0" color="white" radius="0.3">
    <a-troika-text
      value="1"
      align="center"
      anchor="align"
      color="#272727"
      depth-offset="-1"
      font-size="0.3"
      variants="font: montserrat; weight: 600;"
    />
  </a-circle>
</a-troika-text>

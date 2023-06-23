<script>
  import EX09 from "../components/svelte/experiments/EX09.svelte";
  import EX08 from "./../components/svelte/experiments/EX08.svelte";
  import EX07 from "./../components/svelte/experiments/EX07.svelte";
  import EX06 from "./../components/svelte/experiments/EX06.svelte";
  import EX05 from "../components/svelte/experiments/EX05.svelte";
  import EX04 from "../components/svelte/experiments/EX04.svelte";
  import EX03 from "../components/svelte/experiments/EX03.svelte";
  import EX02 from "../components/svelte/experiments/EX02.svelte";
  import EX01 from "../components/svelte/experiments/EX01.svelte";
</script>

<a-entity
  id="lookme"
  position="0 0 -3"
  proxy-event__loaded="event: loaded; to: #overlay; as: fadein"
/>
<a-light
  position="3 3 0"
  target="#lookme"
  type="directional"
  intensity="1.2"
  color="#FFF"
/>

<!-- <EX01 /> -->
<!-- <EX02 /> -->
<!-- <EX03 /> -->
<!-- <EX04 /> -->
<!-- <EX05 /> -->
<!-- <EX06 /> -->
<!-- <EX07 /> -->
<!-- <EX08 /> -->
<EX09 />

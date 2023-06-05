<script>
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
<a-light type="ambient" intensity="1.2" color="#FFF" />

<!-- <EX01 /> -->
<!-- <EX02 /> -->
<!-- <EX03 /> -->
<!-- <EX04 /> -->
<!-- <EX05 /> -->
<EX06 />

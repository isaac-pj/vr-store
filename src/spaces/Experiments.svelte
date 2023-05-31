<script>
  import Teste04 from "../components/svelte/experiments/EX04.svelte";
  import Teste01 from "../components/svelte/experiments/EX01.svelte";
  import Teste02 from "../components/svelte/experiments/EX02.svelte";
  import Teste05 from "../components/svelte/experiments/EX05.svelte";
  import Teste03 from "../components/svelte/experiments/EX03.svelte";
</script>

<a-entity
  id="lookme"
  position="0 0 -3"
  proxy-event__loaded="event: loaded; to: #overlay; as: fadein"
/>
<a-light type="ambient" intensity="1.2" color="#FFF" />

<!-- <Teste01 /> -->
<!-- <Teste02 /> -->
<!-- <Teste03 /> -->
<Teste04 />
<!-- <Teste05 /> -->

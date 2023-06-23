<script>
  const arr = new Array(16);
</script>

<a-entity
  layout="type: circle; radius: 3; angle: 30; plane: xz"
  position="0 1 0"
>
  {#each arr as x}
    <a-plane class="cursor active" look-at="#mainCamera" />
  {/each}
</a-entity>

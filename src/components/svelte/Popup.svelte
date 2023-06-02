<script>
  export let id;
  export let route;
  export let payload;
  export let position;
  export let title;
  export let subtitle;
  export let price;

  let popupRef;
  let isReady = false;

  $: routeParams = { path: route, data: payload };

  const handlePopupOpen = ({ target }) => {
    if (!target.classList.contains("popup")) return;
    const popupActive = target.sceneEl.querySelector(".popup.active");
    popupRef.emit("popupopen");
    if (popupActive && popupActive.id === popupRef.id) return;
    popupActive?.emit("popupclose");
  };
</script>

<a-plane
  {id}
  class="popup"
  opacity="0"
  scale="0 0 0"
  look-at="#mainCamera"
  animation__scaleup="property: scale; startEvents: popupopen; to: 1 1 1; dur: 200"
  animation__scaledown="delay: 300; property: scale; startEvents: popupclose; to: 0 0 0; dur: 200"
  animation__slideup={`property: position; startEvents: popupopen; to: ${position}; dur: 200`}
  animation__slidedown="delay: 300; property: position; startEvents: popupclose; to: 0 0 0; dur: 200"
  event-set__active="_event: popupopen; class: popup active;"
  event-set__inactive="_event: popupclose; class: popup;"
  on:animationcomplete__slideup={() => (isReady = true)}
  on:animationcomplete__slidedown={() => (isReady = false)}
  on:mouseenter={handlePopupOpen}
  bind:this={popupRef}
>
  <c-text value={title} position="-0.4 0.40 0.01" weight="700" />
  <c-text value={subtitle} position="-0.4 0.23 0.01" width="4" />
  <c-text value={price} position="-0.4 0.15 0.01" width="6" weight="600" />

  <a-plane
    id="secondaryButton"
    class="active"
    class:cursor={isReady}
    material="shader: flat"
    color="#444357"
    radius="0.05"
    position="0 -0.1 0.01"
    width="0.8"
    height="0.2"
    text="value: SEE MORE; width: 1.6; align: center; letterSpacing: 10px; yOffset: 0.01;"
    montserrat="weight: 700"
    navigate={routeParams}
  />
  <a-plane
    id="primaryButton"
    material="shader: flat"
    color="#FAC200"
    position="0 -0.35 0.01"
    width="0.8"
    height="0.2"
    text="value: GET THIS; width: 1.6; align: center; letterSpacing: 10px; yOffset: 0.01; color: #272727;"
    montserrat="weight: 700"
  />
</a-plane>

<!-- TEST 01 - register a custom web component -->

<a-sphere position="0 1 -5" color="green" rarius="0.5" />

<a-mybox box-color="#f00" box-scale="0.5 0.5 0.5" box-position="-1 1 -3" />

<a-mybox
  box-color="#00f"
  box-scale="0.5 0.5 0.5"
  box-position="1 1 -3"
  proxy-event__lookme="event: loaded; to: #mainCamera; as: lookme;"
/>

<a-person position="0 0 -3" />

<a-person
  position="1 0 -3"
  skin-color="peachpuff"
  shirt-color="grey"
  pants-color="darkgrey"
/>

<a-person
  position="-1 0 -3"
  skin-color="sienna"
  shirt-color="pink"
  pants-color="white"
/>

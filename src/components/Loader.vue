<template>
  <div
    v-if="show"
    class="lds-wrapper"
    :style="{
      'background-color': `var(${background})`,
      'border-radius': `${radius}em`,
      '--bg': `var(${color})`
    }"
  >
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
  props: [ 'show', 'background', 'color', 'radius' ]
}
</script>

<style scoped>
.lds-wrapper {
  font-size: .8em;
  position: absolute;
  top: 0;
  right:0;
  z-index: var(--z-index-loader);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5em;
  --bg: var(--font-white);
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 5em;
  height: 1em;
}
.lds-ellipsis div {
  position: absolute;
  top: .1em;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background: var(--bg);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: .5em;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: .5em;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 2em;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 3.5em;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(1.5em, 0);
  }
}
</style>

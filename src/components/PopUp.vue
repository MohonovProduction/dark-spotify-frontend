<template>
  <div class="popup-wrapper" :class="{ 'popup-wrapper--active': active }">
    <article class="popup" :class="{ 'popup--active': active }">
      <h2 class="popup__title">{{ title }}</h2>
      <slot name="body" />
      <slot name="button" />
    </article>
    <div @click="$emit('close')" class="popup-backdrop"></div>
  </div>
</template>

<script>
export default {
  name: 'PopUp',
  props: [
    'active', 'title'
  ],
  data() {
    return {
    }
  },
  computed: {
    isActive() {

    }
  }
}
</script>

<style scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-hidden);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 1em;

  background-color: var(--bg-opacity);
  backdrop-filter: blur(10px);
}
.popup-wrapper--active {
  z-index: var(--z-index-popup-warpper);
  opacity: 1;
}
.popup-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: var(--z-index-popup-backdrop);
  opacity: 0;
  transition: opacity .3s ease-in-out;
}
.popup {
  z-index: var(--z-index-popup);
  display: grid;
  grid-gap: .5em;

  padding: 2em 1.5em;

  background-color: var(--bg);
  border-radius: 1em;

  transform: scale(.5);
  opacity: 0;
  transition-delay: .3s;
  transition: .15s ease;
}
.popup--active {
  transform: scale(1);
  opacity: 1;
}
.popup__title {
  text-align: center;
  margin-bottom: .3em;
}
</style>

<style>
.popup__label {
  color: var(--font-white);
  margin-top: .5em;
}
</style>

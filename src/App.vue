<template>
  <router-view v-slot="{ Component }">
    <transition name="fade--">
      <div>
        <component :is="Component"/>
      </div>
    </transition>
  </router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.15s ease;
}

.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: scale(.5) translate(5px, -5px);
}

:root {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  --corner: 141;
  --bg: hsla(var(--corner), 5%, 9%, 1);
  --bg-opacity: hsla(var(--corner), 5%, 9%, .8);
  --bg-darken: hsla(var(--corner), 5%, 13%, 1);
  --bg-dark: hsla(var(--corner),   5%, 19%, 1);

  --bg-dark-gray: hsla(var(--corner), 14%, 19%, 1);
  --bg-dark-red : hsl(var(--corner), 14%, 19%, 1);

  --bg-gray: hsla(var(--corner), 0%, 47%, 1);
  --bg-gray-light: hsla(var(--corner), 0%, 65%, 1);
  --bg-white: hsla(var(--corner), 4%, 96%, 1);

  --primary: hsla(var(--corner), 76%, 48%, 1);

  --font-white: hsla(var(--corner), 4%, 96%, 1);
  --font-lighten-gray: hsla(var(--corner), 4%, 86%, 1);
  --font-gray: hsla(var(--corner), 4%, 70%, 1);
  --font-black: hsla(var(--corner), 0%, 7%, 1);
  --font-family: 'Open Sans', sans-serif;

  --z-index-hidden: -1000;
  --z-index-popup-warpper: 990;
  --z-index-popup-backdrop: 1000;
  --z-index-popup: 1010;
  --z-index-hot-bar: 2000;

  font-size: calc(.8em + 1vw);
  font-family: 'Open Sans', sans-serif;
  letter-spacing: .02em;
  word-spacing: .04em;
  line-height: 1.5em;
  color: var(--font-white);
  text-rendering: optimizeLegibility;
  background-color: var(--bg);
  min-height: 100vh;
}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

textarea,
input {
  font-size: 1em;
  color: var(--font-white);
  padding: .5em;
  background-color: var(--bg-dark-gray);
  border: none;
  border-radius: .4em;
  outline: none;
}
textarea::selection,
input::selection {
  outline: var(--primary) solid .2em;
}

button {
  border: none;
  user-select: none;
  outline: none;
  padding: .5em;
}

.wrapper {
  min-height: 100vh;
}

.primary-line {
  background-color: var(--primary);
  color: var(--bg);
  font-style: italic;
  padding: 0 .25em;
}

.button-primary {
  justify-self: end;
  font-weight: 600;
  color: var(--font-black);
  padding: .5em 2em;
  background-color: var(--primary);
  border-radius: 1em;
}
</style>

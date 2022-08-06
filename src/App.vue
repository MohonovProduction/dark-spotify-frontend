<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

:root {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  --corner: 141;
  --bg: hsla(var(--corner), 0%, 7%, 1);
  --bg-dark-gray: hsla(var(--corner), 14%, 19%, 1);
  --bg-dark-red : hsl(var(--corner), 14%, 19%, 1);
  --bg-gray: hsla(var(--corner), 0%, 47%, 1);
  --bg-gray-light: hsla(var(--corner), 0%, 65%, 1);
  --bg-white: hsl(var(--corner), 4%, 96%);
  --font-white: hsl(var(--corner), 4%, 96%);
  --font-lighten-gray: hsl(var(--corner), 4%, 86%);
  --font-gray: hsl(var(--corner), 4%, 70%);
  --font-black: hsla(var(--corner), 0%, 7%, 1);
  --primary-green: hsla(var(--corner), 76%, 48%, 1);
  --font-family: 'Open Sans', sans-serif;
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

.wrapper {
  min-height: 100vh;
}

.primary-line {
  background-color: var(--primary-green);
  color: var(--bg);
  font-style: italic;
  padding: 0 .25em;
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
  outline: var(--primary-green) solid .2em;
}

button {
  border: none;
  user-select: none;
  outline: none;
  padding: .5em;
}
</style>

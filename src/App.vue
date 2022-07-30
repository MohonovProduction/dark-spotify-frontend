<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

:root {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  --bg: hsla(0, 0%, 7%, 1);
  --bg-gray: hsla(0, 0%, 47%, 1);
  --bg-white: hsla(0, 0%, 96%, 1);
  --font-white: hsla(0, 0%, 100%, 1);
  --primary-green: hsla(141, 76%, 48%, 1);
  font-size: calc(.8em + 1vw);
  font-family: 'Open Sans', sans-serif;
  letter-spacing: .02em;
  word-spacing: .04em;
  line-height: 1.3em;
  color: var(--font-white);
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

.primary-line {
  background-color: var(--primary-green);
  color: var(--bg);
  font-style: italic;
  padding: 0 .25em;
}

textarea {
  font-size: 1em;
  color: var(--font-white);
  padding: .5em;
  background-color: var(--bg-gray);
  border: none;
  border-radius: .4em;
  outline: none;
}
textarea::selection {
  outline: var(--primary-green) solid .2em;
}

.button-gray {
  color: var(--bg);
  font-weight: 700;
  padding: 1em 2.5em;
  background-color: var(--bg-white);
  border: none;
  border-radius: 3em;
  width: min-content;
}
</style>

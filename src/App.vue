<template>
  <router-view/>
</template>

<style>
:root {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  --bg: hsla(0, 0%, 7%, 1);
  --font-white: hsla(0, 0%, 100%, 1);
  font-size: calc(.5em + 1vw);
  color: var(--font-white);
  background-color: var(--bg);

}

*,
::before,
::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}
</style>

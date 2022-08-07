<template>
  <nav class="hot-bar">
    <router-link
      to="/"
      class="hot-bar__link hot-bar__link-home"
      :class="{ 'hot-bar__link--active': active === 'home' }"
    >Home</router-link>
    <router-link
      to="/search"
      class="hot-bar__link hot-bar__link-search"
      :class="{ 'hot-bar__link--active': active === 'search' }"
    >Search</router-link>
    <router-link
      to="/your-library"
      class="hot-bar__link hot-bar__link-your-library"
      :class="{ 'hot-bar__link--active': active === 'your-library' }"
    >Your Library</router-link>
  </nav>
</template>

<script>
export default {
  name: "HotBar",
  props: [ 'active' ]
}
</script>

<style scoped>
  .hot-bar {
    position: sticky;
    bottom: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    justify-items: center;
    padding: 1em;
    user-select: none;
    background-color: var(--bg-darken);
    line-height: initial;
  }
  .hot-bar__link:link,
  .hot-bar__link:visited,
  .hot-bar__link:hover,
  .hot-bar__link:active {
    display: grid;
    grid-gap: .1em;
    justify-items: center;
    color: var(--font-white);
    text-decoration: none;
    font-size: .5em;
    opacity: .7;
  }
  .hot-bar__link--active:link,
  .hot-bar__link--active:visited,
  .hot-bar__link--active:hover,
  .hot-bar__link--active:active {
    opacity: 1;
  }
  .hot-bar__link::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background-image: url('../assets/icons.svg');
    background-repeat: no-repeat;
    background-size: auto 54px;
  }
  .hot-bar__link-home::before {
    background-position: -.5px 0;
  }
  .hot-bar__link--active.hot-bar__link-home::before {
    background-position: -34.5px 0;
  }
  .hot-bar__link-search::before {
    background-position: -69.5px 0;
  }
  .hot-bar__link--active.hot-bar__link-search::before {
    background-position: -103.5px 0;
  }
  .hot-bar__link-your-library::before {
    background-position: -137.5px 0;
  }
  .hot-bar__link--active.hot-bar__link-your-library::before {
    background-position: -170.5px 0;
  }
</style>

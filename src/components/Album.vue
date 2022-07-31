<template>
  <article class="album">
    <img v-if="src !== ''" class="album__image" :src="src" :alt="alt">
    <div v-else class="album__image" style="background-color: hsl(100, 90%, 90%)"></div>
    <p class="album__title">{{title}}</p>
  </article>
</template>

<script>
export default {
  name: "Album",
  props: [
    'src',
    'alt',
    'title'
  ]
}
</script>

<style scoped>
.album {
  display: grid;
  grid-gap: .3em;
  max-width: min-content;
  padding: .5em 0;
}
.album__image {
  width: 6em;
  height: 6em;
}
.album__title {
  font-size: calc(.4rem + .3em);
  line-height: calc(.8rem + .3em);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

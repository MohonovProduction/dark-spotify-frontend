<template>
  <article class="artist">
    <img v-if="src !== ''" class="artist__img" :src="src" :alt="alt">
    <div v-else class="artist__img" style="background-color: hsl(150, 90%, 90%)"></div>
    <p class="artist__name">{{name}}</p>
  </article>
</template>

<script>
export default {
  name: "Artist",
  props: [
    'src', 'alt', 'name'
  ]
}
</script>

<style scoped>
.artist {
  display: grid;
  grid-gap: .3em;
  max-width: min-content;
  padding: .5em 0;
}
.artist__img {
  width: 6em;
  height: 6em;
  border-radius: 3em;
  object-fit: cover;
}
.artist__name {
  font-size: calc(.4rem + .3em);
  line-height: calc(.8rem + .3em);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>

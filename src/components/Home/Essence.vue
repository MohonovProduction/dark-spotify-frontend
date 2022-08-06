<template>
  <article class="essence">
    <img
      :class="{
        'essence__img--artist': type === 'artist',
        'essence__img--album': type === 'album',
        'essence__img--playlist': type === 'playlist',
        'essence__img--song': type === 'song'
      }"
      :src="img"
      :alt="title"
    >
    <p class="essence__title">{{ title }}</p>
  </article>
</template>

<script>
export default {
  name: "Essence",
  props: [ 'img', 'title', 'type', 'href' ]
}
</script>

<style scoped>

.essence {
  display: inline-block;
  font-size: 1em;
  max-width: 6em;
  padding: .5em;
}

.essence__img--artist,
.essence__img--album,
.essence__img--playlist,
.essence__img--song {
  width: 6em;
  object-fit: cover;
}
.essence__img--artist {
  border-radius: 6em;
}
.essence__img--album {
  border-radius: 1em;
}
.essence__img--playlist {
  border-radius: .5em;
}
.essence__img--song {
  border-radius: .25em;
}

.essence__title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: .85em;
}

</style>

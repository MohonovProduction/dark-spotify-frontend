<template>
  <article
    :class="{
      'essence--home': where === 'home',
      'essence--search': where === 'search',
      'essence--your-library': where === 'your-library',
    }"
  >
    <img
      :class="{
        'essence__img--artist': type === 'artist',
        'essence__img--album': type === 'album',
        'essence__img--playlist': type === 'playlist',
        'essence__img--song': type === 'song',
      }"
      :src="img"
      :alt="title"
    >

    <p
      :class="{
        'essence__title--home': where === 'home',
        'essence__title--your-library': where === 'your-library' ,
      }"
    >{{ title }}</p>

    <p
      v-if="subtitle"
      :class="{
        'essence__subtitle--home': where === 'home',
        'essence__subtitle--your-library': where === 'your-library',
      }"
    >{{ subtitle }}</p>
  </article>
</template>

<script>
export default {
  name: "Essence",
  props: [ 'where', 'type', 'title', 'subtitle', 'img', 'to' ]
}
</script>

<style scoped>

.essence--home {
  display: inline-block;
  font-size: 1em;
  max-width: min-content;
  padding: .5em;
}
.essence--your-library {
  display: grid;
  grid-template-areas:
    'img title'
    'img subtitle';
  grid-template-columns: min-content auto;
  grid-gap: .0em .8em;
  font-size: .5em;
  width: 100%;
  padding: 1em;
}

.essence__img--artist,
.essence__img--album,
.essence__img--playlist,
.essence__img--song {
  grid-area: img;
  width: 6em;
  height: 6em;
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



.essence__title--home,
.essence__title--your-library {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.essence__subtitle--home,
.essence__subtitle--your-library {

}
.essence__title--home {
  font-size: .85em;
  max-width: 6em;
}
.essence__title--your-library {
  grid-area: title;
  align-self: end;
  font-size: 1.3em;
}
.essence__subtitle--your-library {
  grid-area: subtitle;
  align-self: start;
  color: var(--font-gray);
}

</style>

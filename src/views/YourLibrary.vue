<template>
  <article class="wrapper">
    <header class="header">
      <img class="header__img" src="https://kinonevs.ru/wp-content/uploads/2021/08/ryan-gosling-reveals-he-and-eva-mendes-are-still-deeply-in-love-1628101080.jpg" alt="">
      <h1 class="header__heading">Your library</h1>
      <button class="header__button"></button>
    </header>
    <ul class="categories">
      <li class="categories__item">
        <button class="categories__button">Playlists</button>
      </li>
      <li class="categories__item">
        <button class="categories__button">Artists</button>
      </li>
      <li class="categories__item">
        <button class="categories__button">Albums</button>
      </li>
      <li class="categories__item">
        <button class="categories__button">Songs</button>
      </li>
    </ul>
    <article class="library">
      <header class="library__header">
        <button class="library__recently-played">Recently played</button>
        <button class="library__change-display"></button>
      </header>
      <ul class="library__list">
        <li v-for="el in 50" class="library__item">
          <Essence
            where="your-library"
            type="album"
            :title="el + 'lorem ipsum dolor sit amet consectedur'"
            :subtitle="el + 10000"
            img="https://cdn.vox-cdn.com/thumbor/I7I0t87KZ-vf_GSWrH118jwl6d0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23437452/The_Spy_x_Family_Anime_Succeeds_Because_of_Its_Characters_.jpg"
          />
        </li>
      </ul>
    </article>
  </article>
  <HotBar active="your-library" />
</template>

<script>
import HotBar from "@/components/HotBar.vue";
import Essence from "@/components/Essence";

export default {
  name: "YourLibrary",
  components: {
    HotBar, Essence
  }
}
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: .5em;
  align-items: center;
  padding: 2em 1em 1em 1em;
}
.header__img {
  width: 2em;
  height: 2em;
  border-radius: 4em;
  object-fit: cover;
}
.header__heading {
  font-weight: 600;
}
.header__button {
  box-sizing: content-box;
  position: relative;
  background: none;
  width: 1em;
  height: 1em;
  padding: .3em;
}
.header__button::before,
.header__button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--bg-gray-light);
}
.header__button::before {

}
.header__button::after {
  transform: rotate(90deg);
}

.categories {
  padding: 1em;
  list-style: none;
  overflow-x: scroll;
}
.categories__item {
  display: inline-block;
  margin-right: .5em;
}
.categories__button {
  color: var(--font-white);
  padding: .8em 1.25em;
  background-color: hsla(0, 0%, 0%, 0);
  border: 1px solid var(--bg-gray);
  border-radius: 3em;
}

.library {
  padding: 1em 0;
}
.library__header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 1em;
}
.library__recently-played,
.library__change-display {
  display: block;
  justify-self: start;
  background: none;
  color: var(--font-white);
}
.library__recently-played {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}
.library__recently-played::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background-size: auto 77px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
  background-position: -130px -54px;
}
.library__change-display {
  padding: 0;
  width: 20px;
  height: 20px;
  background-size: auto 70px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
  background-position: -96px -46px;
}

.library__list {
  font-size: 1.5rem;
}
</style>

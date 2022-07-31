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
    </ul>
    <article class="library">
      <header class="library-header">
        <button class="library-header__recently-played">Recently played</button>
        <button class="library-header__change-display"></button>
      </header>

    </article>
  </article>
  <HotBar active="your-library" />
</template>

<script>
import HotBar from "@/components/HotBar.vue";

export default {
  name: "YourLibrary",
  components: {
    HotBar
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
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--bg-gray-light);
}
.header__button::before {
  top: 50%;
}
.header__button::after {
  top: 50%;
  transform: rotate(90deg);
}

.categories {
  padding: 1em;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-gap: .5em;
}
.categories__item {
  display: block;
}
.categories__button {
  color: var(--font-white);
  padding: .8em 1.5em;
  background-color: hsla(0, 0%, 0%, 0);
  border: 1px solid var(--bg-gray);
  border-radius: 3em;
}

.library {
  padding: 1em 0;
}
.library-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 1em;
}
.library-header__recently-played,
.library-header__change-display {
  display: block;
  justify-self: start;
  background: none;
  color: var(--font-white);
}
.library-header__recently-played {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
}
.library-header__recently-played::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  background-size: auto 77px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
  background-position: -130px -54px;
}
.library-header__change-display {
  padding: 0;
  width: 20px;
  height: 20px;
  background-size: auto 70px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
  background-position: -96px -46px;
}
</style>

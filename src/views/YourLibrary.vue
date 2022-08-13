<template>
  <article class="wrapper">
    <header class="header">
      <img class="header__img" src="https://kinonevs.ru/wp-content/uploads/2021/08/ryan-gosling-reveals-he-and-eva-mendes-are-still-deeply-in-love-1628101080.jpg" alt="">
      <h1 class="header__heading">Your library</h1>
      <button @click="this.show.addMenu = true" class="header__button"></button>
      <transition name="slide-left">
        <div v-if="show.addMenu" class="bubble-menu-wrapper">
          <ul class="bubble-menu">
            <li class="bubble-menu__item">
              <button @click="this.show.addSong = true; this.show.addMenu = false" class="bubble-menu__button">Add song</button>
            </li>
            <li class="bubble-menu__item">
              <button @click="this.show.createPlayList = true; this.show.addMenu = false" class="bubble-menu__button">Create playlist</button>
            </li>
            <li>
              <button @click="this.show.addFriend = true; this.show.addMenu = false" class="bubble-menu__button">Add friend</button>
            </li>
          </ul>
          <div @click="this.show.addMenu = false" class="bubble-menu-backdrop"></div>
        </div>
      </transition>
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

  <PopUp
    title="Add friend"
    :active="show.addFriend"
    @close="this.show.addFriend = false"
  >
    <template v-slot:body>
      <label>Enter your friend username</label>
      <input type="text" />
    </template>
    <template v-slot:button>
      <button
        @click="addFriend"
        class="button-primary"
      >Add</button>
    </template>
  </PopUp>

  <PopUp
    title="Add song"
    :active="show.addSong"
    @close="this.show.addSong = false"
  >
    <template v-slot:body>
      <label>Chose a song</label>
      <input type="file" accept="audio">
    </template>
    <template v-slot:button>
      <button
        @click="addSong"
        class="button-primary"
      >Add</button>
    </template>
  </PopUp>

  <PopUp
    title="Create play list"
    :active="show.createPlayList"
    @close="this.show.createPlayList = false"
  >
    <template v-slot:body>
      <label class="popup__label">Chose playlist name</label>
      <input type="text">
      <label class="popup__label">Chose playlist cover</label>
      <input type="file" accept="image">
    </template>
    <template v-slot:button>
      <button
        @click="addSong"
        class="button-primary"
      >Create</button>
    </template>
  </PopUp>
</template>

<script>
import HotBar from "@/components/HotBar.vue";
import Essence from "@/components/Essence";
import PopUp from "@/components/PopUp";

export default {
  name: "YourLibrary",
  components: {
    HotBar, Essence, PopUp
  },
  data() {
    return {
      show: {
        addMenu: false,
        addFriend: false,
        addSong: false,
        createPlayList: false
      },
      playList: {
        songs: [
          { name: 'Lorem' },
          { name: 'Ipsum' },
          { name: 'Dolor sit amet' },
        ]
      },
    }
  },
  methods: {
    addFriend() {

    },
    addSong() {

    },
    createPlayList() {

    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto 0;
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
  --size: .4em;
  box-sizing: content-box;
  position: relative;
  width: var(--size);
  height: var(--size);
  margin: 1em;
  padding: 0;
  border-radius: calc(var(--size) + 1em);
  background-color: var(--bg-gray-light);
}
.header__button::before,
.header__button::after {
  --distance: -.7em;
  content: '';
  position: absolute;
  left: 0;
  display: block;
  width: var(--size);
  height: var(--size);
  background-color: inherit;
  border-radius: inherit;
}
.header__button::before {
  top: var(--distance);
}
.header__button::after {
  bottom: var(--distance);
}

.bubble-menu-wrapper {
  align-self: start;
  position: relative;
}
.bubble-menu-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 980;
}

.bubble-menu {
  position: absolute;
  top: 0;
  right: 0;
  padding: .5em;
  white-space: nowrap;
  list-style: none;
  background-color: var(--bg-dark);
  border-radius: 1em;
  z-index: 990;
}

.bubble-menu__item {
  margin-bottom: .4em;
}
.bubble-menu__item:last-child {
  margin-bottom: 0;
}

.bubble-menu__button {
  display: block;
  padding: .5em 1.25em;
  width: 100%;
  font-size: 1em;
  color: var(--font-lighten-gray);
  text-align: left;
  background-color: var(--bg-dark);
  border-radius: .5em;
}
.bubble-menu__button:hover,
.bubble-menu__button:active {
  background-color: var(--bg-darken);
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

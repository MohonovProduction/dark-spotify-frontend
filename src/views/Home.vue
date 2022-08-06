<template>
  <article class="wrapper">
    <article class="recently">
      <header class="recently__header">
        <h2 class="recently__heading">Recently played</h2>
        <button class="recently__settings"></button>
        <button class="recently__history"></button>
        <button class="recently__notifications"></button>
      </header>
      <div class="recently__scroll">
        <template v-for="el in 50">
          <Essence
            img="https://avatars.akamai.steamstatic.com/5f93973fe38409e2dbc1fcb803696f59bfb624a9_full.jpg"
            :title="el + ' Ricardo`s trak! yes'"
            type="artist"
          />
        </template>
      </div>
    </article>

    <article class="dark-wrapped">
      <header class="dark-wrapped__header">
        <img class="dark-wrapped__img" src="https://i.pinimg.com/originals/f6/b5/8d/f6b58d27bb4f53b229d0df58593c0edd.jpg" alt="sber tyan">
        <h2 class="dark-wrapped__heading">Your 2022 in review</h2>
        <h3 class="dark-wrapped__hashtag">#DarkWrapped</h3>
      </header>
      <div class="dark-wrapped__scroll">
        <Essence
          img="https://avatars.akamai.steamstatic.com/5f93973fe38409e2dbc1fcb803696f59bfb624a9_full.jpg"
          title="sss"
          type="album"
        />
        <Essence
          img="https://avatars.akamai.steamstatic.com/5f93973fe38409e2dbc1fcb803696f59bfb624a9_full.jpg"
          title="sss"
          type="playlist"
        />
      </div>
    </article>

    <article class="friends">
      <header class="friends__header">
        <h2 class="friends__heading">Friend's picks</h2>
      </header>
      <div class="friends__scroll">
        <Essence
          img="https://avatars.akamai.steamstatic.com/5f93973fe38409e2dbc1fcb803696f59bfb624a9_full.jpg"
          title="sss"
          type="song"
        />
      </div>
    </article>
  </article>
  <HotBar active="home"/>
</template>

<script>
import HotBar from "@/components/HotBar";
import Essence from "@/components/Home/Essence";

export default {
  name: "Home",
  components: {
    HotBar, Essence
  }
}
</script>

<style scoped>

h2 {
  font-size: 1em;
}

.recently,
.dark-wrapped,
.friends {
  padding: 2em 0 1em 0;
}

.recently__scroll,
.dark-wrapped__scroll,
.friends__scroll {
  padding: .3em 1rem;
  white-space: nowrap;
  overflow-x: scroll;
}

.recently__scroll {
  font-size: 1rem;
}
.dark-wrapped__scroll,
.friends__scroll {
  font-size: 1.5em;
}

.recently__scroll::-webkit-scrollbar,
.dark-wrapped__scroll::-webkit-scrollbar,
.friends__scroll::-webkit-scrollbar {
  display: none;
}

.recently__header,
.dark-wrapped__header,
.friends__header {
  padding: 0 1em;
}
.recently__header {
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: .3em;
}
.dark-wrapped__header {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'img hashtag'
    'img heading';
  grid-gap: 0 .5em;
}

.recently__heading {}

.recently__notifications,
.recently__settings,
.recently__history {
  display: block;
  width: 15px;
  height: 15px;
  background-color: hsla(0, 0%, 0%, 0);
  background-size: auto 78px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
}
.recently__notifications {
  background-position: 4px -50px;
}
.recently__settings {
  background-position: -51px -50px;
}
.recently__history {
  background-position: -23px -50px;
}

.dark-wrapped__heading,
.friends__heading {
  grid-area: heading;
  align-self: start;
  font-size: 1.5em;
}
.dark-wrapped__hashtag {
  grid-area: hashtag;
  align-self: end;
  font-size: .7em;
  text-transform: uppercase;
  color: var(--bg-gray);
}
.dark-wrapped__img {
  grid-area: img;
  width: 4em;
  height: 4em;
  border-radius: .2em;
}
</style>

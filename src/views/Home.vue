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
          <Album :title="el + ` Ricardo's hit on dark!`" :alt="el" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwzwD4IspmiyxpCRLd0YMW1atCRRqZu2pXw&usqp=CAU" />
          <Artist :name="el" src="https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952" :alt="'ssss'" />
        </template>
      </div>
    </article>

    <article class="dark-wrapped">
      <header class="dark-wrapped__header">
        <img class="dark-wrapped__img" src="https://i.pinimg.com/originals/f6/b5/8d/f6b58d27bb4f53b229d0df58593c0edd.jpg" alt="sber tyan">
        <h2 class="dark-wrapped__heading">Your 2022 in review</h2>
        <h3 class="dark-wrapped__hashtag">#DarkWrapped</h3>
      </header>
      <div class="dark-wrapped__albums">
        <Album title="Your top songs" src="" alt="sss" />
        <Album title="Your artist revealed" src="" alt="sss" />
      </div>
    </article>

    <article class="friends">
      <header class="friends__header">
        <h2 class="friends__heading">Friend's picks</h2>
      </header>
      <div class="friends__scroll">
        <Album title="Урал. Закипитите булик к подъезду подхожу" src="https://topwar.ru/uploads/posts/2020-01/1579798554_ural375_1.jpg" alt="" />
        <Album title="Кобра опасная. Полюбила" src="https://i.scdn.co/image/ab67616d0000b2732359238234e410f29d029c16" alt="" />
      </div>
    </article>
  </article>
  <HotBar active="home"/>
</template>

<script>
import HotBar from "@/components/HotBar";
import Album from "@/components/Album";
import Artist from "@/components/Artist";

export default {
  name: "Home",
  components: {
    HotBar, Album, Artist
  }
}
</script>

<style scoped>
h2 {
  font-size: 1em;
}

.recently {
  padding: 2em 0 1em 1em;
}
.recently__header {
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: .3em;
  padding-right: 1em;
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

.recently__scroll {
  font-size: 1em;
  display: grid;
  grid-template-columns: repeat(100, auto);
  grid-gap: 1em;
  padding: .3em 0;
  overflow-x: scroll;
}


.dark-wrapped,
.friends {
  padding: 1em;
  padding-right: 0;
}
.dark-wrapped__header {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'img hashtag'
    'img heading';
  grid-gap: 0 .5em;
  padding: .3em 0;
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
.dark-wrapped__albums,
.friends__scroll {
  display: grid;
  grid-template-columns: repeat(100, auto);
  grid-gap: 1em;
  overflow-x: scroll;
  font-size: 1.5em;
}
.dark-wrapped__albums::-webkit-scrollbar,
.friends__scroll::-webkit-scrollbar,
.recently__scroll::-webkit-scrollbar {
  display: none;
}
</style>

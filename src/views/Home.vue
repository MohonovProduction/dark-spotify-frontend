<template>
  <article class="recently">
    <header class="recently__header">
      <h2 class="recently__heading">Recently played</h2>
      <button class="recently__settings"></button>
      <button class="recently__history"></button>
      <button class="recently__notifications"></button>
    </header>
    <div class="recently__scroll">
      <Album v-for="el in 100" :title="el + ` Ricardo's hit on dark!`" :alt="el" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwzwD4IspmiyxpCRLd0YMW1atCRRqZu2pXw&usqp=CAU" />
    </div>
  </article>
  <article>

  </article>
  <HotBar active="home"/>
</template>

<script>
import HotBar from "@/components/HotBar.vue";
import Album from "@/components/Album";

export default {
  name: "Home",
  components: {
    HotBar, Album
  }
}
</script>

<style scoped>
h2 {
  font-size: 1em;
}

.recently {
  padding: 2em 1em;
}
.recently__header {
  display: grid;
  grid-template-columns: 1fr repeat(3, auto);
  grid-gap: .3em;
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

  scrollbar-track-color: hsla(0, 0%, 0%, 0);
  scrollbar-base-color: hsla(0, 0%, 0%, 0);
  scrollbar-arrow-color: hsla(0, 0%, 0%, 0);
}
.recently__scroll::-webkit-scrollbar {
  display: none;
}
</style>

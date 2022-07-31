<template>
  <article class="wrapper">
    <header class="search-header">
      <h1>Search</h1>
    </header>
    <div class="search-textarea-wrapper">
      <textarea class="search-textarea" rows="1" placeholder="Artists, songs, or slaves"></textarea>
    </div>
    <article>

    </article>
  </article>
  <HotBar active="search" />
</template>

<script>
import HotBar from "@/components/HotBar.vue";
import Artist from "@/components/Artist";

export default {
  name: "Search",
  components: {
    Artist,
    HotBar
  }
}
</script>

<style scoped>
.search-header {
  font-size: .8em;
  padding: 2em 1em;
}
.search-textarea-wrapper {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin: 0 1em;
  background-color: var(--bg-white);
  border-radius: .5em;
}
.search-textarea-wrapper::before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  margin-left: .7em;
  background-size: auto 60px;
  background-image: url('../assets/icons.svg');
  background-repeat: no-repeat;
  background-position: -61px -39px;
}
.search-textarea {
  background-color: var(--bg-white);
  border-radius: .5em;
  font-family: var(--font-family);
  color: var(--font-black)
}
.search-textarea::placeholder {
  color: var(--font-black)
}
</style>

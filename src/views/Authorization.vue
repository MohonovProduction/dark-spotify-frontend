<template>
  <section class="wrapper">
    <h1 class="heading">Authorization</h1>
    <article class="form">
      <label class="form__label">Please enter your <span class="primary-line">token</span></label>
      <textarea @keydown.enter="authorization" v-model="token" class="form__textarea" rows="1"></textarea>
      <button @click="authorization" class="button-gray">Authorization</button>
    </article>
  </section>
</template>

<script>
import router from "@/router";

export default {
  name: "Authorization",
  data() {
    return {
      token: null,
    }
  },
  methods: {
    authorization() {
      router.push('/')
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  text-align: center;
  margin-top: 2em;
  padding: 1em;
}
.form {
  display: grid;
  grid-gap: .5em;
  max-width: 640px;
  min-width: 260px;
  font-weight: 600;
  padding: 0 2.5rem;
}
.form__label {
  font-weight: 400;
}
.button-gray {
  margin-top: 1em;
  justify-self: end;
}
</style>

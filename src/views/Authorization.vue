<template>
  <article class="form">
    <label class="form__label">Please enter your token</label>
    <textarea class="form__textarea"></textarea>
    <button class="button-gray">Authorization</button>
  </article>
</template>

<script>
export default {
  name: "Authorization"
}
</script>

<style scoped>
.form {
  display: grid;
  grid-gap: 2em;
  padding: 2rem;
}
.form__label {

}
</style>

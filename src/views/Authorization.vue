<template>
  <section class="wrapper">
    <h1 class="heading">Authorization</h1>
    <article class="form">
      <label class="form__label form__label--active" for="username">Please enter your <span class="primary-line">username</span></label>
      <input
        @keydown.enter="changeFocus('password')"
        v-model="user.username"
        class="form__input"
        :class="{ 'form__input--need-input': condition.needInput }"
        tabindex="1"
        id="username" autofocus
      />

      <label class="form__label" :class="{ 'form__label--active': canTypePassword }" for="password">and <span class="primary-line">password</span></label>
      <input
        @keydown.enter="authorization"
        v-model="user.password"
        class="form__input"
        :class="{ 'form__input--need-input': condition.needInput }"
        tabindex="2"
        id="password"
      />

      <button @click="authorization" class="button" :class="{ 'button--active': canEnter }">Into the darkness</button>
    </article>
  </section>
</template>

<script>
import router from "@/router";
import User from '../api/User'

export default {
  name: "Authorization",
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      condition: {
        needInput: false
      }
    }
  },
  methods: {
    authorization() {
      if (this.user.username.length === 0 || this.user.password === 0) {
        this.condition.needInput = true
        setTimeout(() => { this.condition.needInput = false }, 600)
        return
      }

      User.authorization(this.user)
        .then(async data => {

          console.log(data)

          if (data.ok === false) {
            return
          }

          const response = await data.json()
          console.log(response)

          User.setToken(response.token)

          router.push((this.$route.query.redirect === undefined) ? this.$route.query.redirect : '/')
        })
        .catch(err => console.log(err))
    },
    changeFocus(id) {
      document.querySelector(`#${id}`).focus()
    }
  },
  computed: {
    canTypePassword() {
      return this.user.username.length > 0
    },
    canEnter() {
      return this.user.username.length > 0 && this.user.password.length > 0
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
  color: var(--font-lighten-gray);
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
  margin-top: .5em;
  opacity: .2;
  transition: opacity .3s ease-in-out;
}
.form__label--active {
  opacity: 1;
}
.form__input {
  transition: transform .1s ease-in-out;
}
.form__input--need-input {
  transform: scale(1.05);
}
.button {
  justify-self: end;
  font-weight: 600;
  font-size: .7em;
  margin-top: 1em;
  padding: 1em 2em;
  background-color: var(--bg-white);
  border-radius: 3em;
  opacity: .2;
  transition: opacity .3s ease-in-out;
}
.button--active {
  opacity: 1;
}
</style>

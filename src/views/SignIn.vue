<template>
  <SignIn v-on:signIn="signIn($event)" />
</template>

<script>
import SignIn from '../components/SignIn'

export default {
  name: 'signIn',
  components: {
    SignIn
  },
  methods: {
    signIn(user) {
      this.$store.dispatch('signIn', user)
        .then(response => {
          if (response.data.signIn) {
            this.$router.replace('home')
          } else {
            this.$router.replace('signup')
          }
        })
    }
  }
}
</script>

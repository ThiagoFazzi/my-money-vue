<template>
  <SignIn v-on:signIn="signIn($event)" />
</template>

<script>
import { mapActions } from 'vuex'
import SignIn from '../components/SignIn'

export default {
  name: 'signIn',
  components: {
    SignIn
  },
  methods: {
    ...mapActions(['SIGN_IN']),
    signIn(user) {
      this.SIGN_IN(user)
        //this.$store.dispatch('SIGN_IN', user)
        .then(response => {
          console.log(response)
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

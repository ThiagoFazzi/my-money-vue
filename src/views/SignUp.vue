<template>
  <SignUp v-on:signUp="signUp($event)" />
</template>

<script>
import SignUp from '../components/SignUp'

export default {
  name: 'signUp',
  components: {
    SignUp
  },
  methods: {
    signUp(newUser) {
      console.log(newUser)
      this.$store.dispatch('signUp', newUser)
        .then(response => {
          if (response.data.createUser) {
            this.$router.replace("signIn")
          }
        })
        .catch(error => {
          throw Error(error)
        })

    }
  }
}
</script>
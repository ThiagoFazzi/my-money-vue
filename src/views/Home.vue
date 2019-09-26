<template>
  <Home />
</template>

<script>
import Home from '../components/Home'
export default {
  name: 'home',
  components: {
    Home
  },
  created() {
    if (!this.$store.getters.userLogged.userId) {
      this.$router.replace('signIn');
    }
  }
}
</script>

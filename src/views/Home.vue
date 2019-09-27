<template>
  <Home />
</template>

<script>
import Home from '../components/Home'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  components: {
    Home
  },
  computed: {
    ...mapGetters(['USER_LOGGED'])
  },
  created() {
    if (!this.USER_LOGGED) {
      this.$router.replace('signIn');
    }
  }
}
</script>

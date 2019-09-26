<template>
  <Profile :user="setUser" v-on:updateProfile="updateProfile($event)" />
</template>

<script>
import axios from 'axios'
import Profile from '../components/Profile'

export default {
  name: 'profile',
  components: {
    Profile
  },
  computed: {
    setUser() {
      return this.$store.getters.USER_LOGGED.user
    }
  },
  methods: {
    updateProfile(user) {
      this.$store.dispatch('updateUser', user)
        .then((response) => {
          if (response.data.updateUser) {
            console.log(response.data.updateUser)
          }
        })
        .catch((error) => {
          throw error;
        })
    }
  }
}
</script>

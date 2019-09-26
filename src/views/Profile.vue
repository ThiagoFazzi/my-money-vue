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
      return this.$store.getters.userLogged.user
    }
  },
  methods: {
    updateProfile(user) {
      axios
        .post(
          "http://localhost:3000/graphql",
          {
            query: `mutation update($userName: String!, $photo: String!) { 
            updateUser(userProfileInput: {userName: $userName, photo: $photo}) { 
              _id
              email
              userName
              photo
              createdDate
              updatedDate
            }
          }`,
            variables: {
              photo: user.photo,
              userName: user.userName
            }
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$store.getters.userLogged.token}`
            }
          }
        )
        .then(resp => {
          if (resp.data.data.updateUser._id) {
            this.$store.commit('updateUser', resp.data.data.updateUser)
          }
        })
        .catch(error => {
          throw error
        })
    }
  }
}
</script>

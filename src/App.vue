<template>
  <v-app>
    <Toolbar />
    <v-content class="background">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar'
export default {
  name: 'App',
  components: {
    Toolbar
  },
}
</script>

<style scoped>
.background {
  background-color: #cfcfcf;
}
</style>

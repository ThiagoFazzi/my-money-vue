<template>
  <Dashboard v-if="!!getUserId" />
</template>

<script>
import Dashboard from "../components/Dashboard";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "dashboard",
  components: {
    Dashboard
  },
  computed: {
    ...mapGetters(["getUserId"])
  },
  methods: {
    ...mapActions(["USER_REQUEST"])
  },
  created() {
    this.USER_REQUEST(this.getUserId);
  }
};
</script>

<style>
</style>
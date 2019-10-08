<template>
  <div>
    <Dashboard v-if="!!getUserId" />
    <Message title="Erro!" type="alert" :content="message" :isOpen="isOpen" />
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard";
import Message from "../components/Message";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "dashboard",
  components: {
    Dashboard,
    Message
  },
  data() {
    return {
      message: "",
      isOpen: false
    };
  },
  computed: {
    ...mapGetters(["getUserId", "getUser"])
  },
  methods: {
    ...mapActions(["USER_REQUEST"])
  },
  created() {
    this.USER_REQUEST(this.getUserId)
      .then(response => {
        console.log(response);
        if (response._id === this.getUserId) {
          console.log(response);
        } else if (!response._id) {
          const message = response.map(item => {
            this.message = item.message;
            this.isOpen = true;
          });
        }
      })
      .catch(error => {
        this.message = error.message;
        this.isOpen = true;
        throw new Error(error);
      });
  }
};
</script>

<style>
</style>
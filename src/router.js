import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "/",
      component: Home
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/signUp",
      name: "signup",
      component: SignUp
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    }
  ]
});

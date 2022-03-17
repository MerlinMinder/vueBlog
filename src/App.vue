<template>
  <div class="container">
    <HeaderVue v-show="login" />
    <RouterView></RouterView>
    <FooterVue v-show="login" />
  </div>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import router from "./router";
import { ref } from "vue";

let route = useRouter(router).currentRoute.valueOf("name");
let login = ref(route.name != "login");
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");
@import "./assets/base.css";
@import "./assets/variables.scss";

* {
  font-family: "Nunito";
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  color: black;
}
</style>

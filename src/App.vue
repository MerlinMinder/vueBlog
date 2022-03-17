<template>
  <div class="container">
    <HeaderVue v-if="!login" />
    <RouterView></RouterView>
    <FooterVue v-if="!login" />
  </div>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import router from "./router";
import { ref, watch } from "vue";

let route = ref(useRouter(router).currentRoute.valueOf("name"));
let login = ref(true);

watch(route, () => {
  login.value = route.value.name == "login";
});
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

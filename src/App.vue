<template>
  <div class="container">
    <HeaderVue />
    <RouterView></RouterView>
    <FooterVue />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");
@import "./assets/base.css";
@import "./assets/variables.scss";

* {
  font-family: "Nunito";
  color: $col-light;
  padding: 0;
  margin: 0;
}

.link {
  text-decoration: none;
  color: black;
}
</style>

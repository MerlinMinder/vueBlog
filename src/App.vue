<template>
  <div class="container">
    <HeaderVue />
    <RouterView></RouterView>
    <FooterVue />
  </div>
</template>

<script setup>
import { RouterView, useRouter } from "vue-router";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import { ref, watch } from "vue";

const login = ref(false);
const router = useRouter();

watch(
  () => router.currentRoute.value,
  () => {
    login = router.currentRoute.value.name;
  }
);
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

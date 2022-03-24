<template>
  <nav>
    <RouterLink class="link link-title" :to="{ name: 'home' }"
      >Blogwiz</RouterLink
    >
    <RouterLinksVue class="links" />
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import RouterLinksVue from "./RouterLinks.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

nav {
  background-color: $navigation;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px;
  .link-title {
    font-size: 30px;
    font-weight: bold;
    color: $title;
  }
}
</style>

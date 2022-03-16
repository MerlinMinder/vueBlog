<template>
  <ul>
    <RouterLink class="link link-second" :to="{ name: 'home' }"
      >Home</RouterLink
    >
    <RouterLink class="link link-second" :to="{ name: 'blogs' }"
      >Blogs</RouterLink
    >
    <RouterLink v-if="admin" class="link link-second" :to="{ name: 'editor' }">
      Editor</RouterLink
    >
    <RouterLink class="link link-second" :to="{ name: 'login' }"
      >Login/Register</RouterLink
    >
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const admin = ref(true);
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;

  .link-second {
    margin-right: 30px;
    font-size: 20px;
    color: $col-light;

    &:hover {
      font-weight: 800;
      color: $col-lime;
    }
  }
}
</style>

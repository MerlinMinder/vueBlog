<template>
  <div id="page" v-if="admin.admin">
    <RouterView></RouterView>
    <RouterLink
      :to="{ name: 'newblog' }"
      id="newblog"
      v-if="useRoute().path == '/editor/editblogs'"
      >New Blog</RouterLink
    >
  </div>
</template>

<script setup>
import PostVue from "../components/editor/Post.vue";
import BlogsVue from "../components/editor/Blogs.vue";
import { useAdminStore } from "../stores/stores";
import { RouterView, RouterLink, useRoute } from "vue-router";
const admin = useAdminStore();
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#page {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  #newblog {
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
    font-weight: 800;
    background-color: $col-dark1;
    margin-bottom: 20px;
    color: $col-light;

    &:hover {
      color: $col-lime;
      transform: scale(1.02);
    }
  }
}
</style>

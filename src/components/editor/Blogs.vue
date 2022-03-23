<template>
  <div class="container" v-if="stateblogs.blogs">
    <RouterLink
      class="blogpost"
      v-for="blog of stateblogs.blogs"
      :key="blog"
      :to="{ name: 'postblog' }"
    >
      <BlogVue :img="blog.img" :title="blog.title" :date="blog.upload" />
    </RouterLink>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import { useBlogStore } from "../../stores/stores";
import BlogVue from "../Blog.vue";

const stateblogs = useBlogStore();
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.container {
  padding: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;

  .blogpost {
    text-decoration: none;
  }
}
</style>

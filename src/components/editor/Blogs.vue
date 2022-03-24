<template>
  <div class="container" v-if="blogs.blogs">
    <RouterLink
      class="blogpost"
      v-for="blog of blogs.blogs"
      :key="blog"
      :to="`/editor/postblog/${blog.title}`"
    >
      <BlogVue :img="blog.img" :title="blog.title" :date="blog.upload" />
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useBlogStore } from "../../stores/stores";
import BlogVue from "../Blog.vue";

const blogs = useBlogStore();
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.container {
  padding: 85px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .blogpost {
    margin: 0px 40px;
    text-decoration: none;
  }
}
</style>

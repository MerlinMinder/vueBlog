<template>
  <div id="page">
    <p id="title">Blogs</p>
    <div id="blogcontainer">
      <RouterLink
        class="blogs"
        v-for="blog of blogs.blogs"
        :key="blog"
        :to="`/posts/${blog.title.replace(/[^a-zA-Z0-9]/g, '')}`"
      >
        <BlogVue :img="blog.img" :title="blog.title" :date="blog.upload" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useBlogStore } from "../stores/stores";
import BlogVue from "../components/Blog.vue";
const blogs = useBlogStore();
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#page {
  background-color: $background;

  #title {
    font-size: 40px;
    color: $title;
    width: "100%";
    text-align: center;
    margin: 30px;
  }

  #blogcontainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 100px;
    flex-wrap: wrap;
    .blogs {
      margin: 20px 40px;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        transform: rotateZ(2deg) scale(1.05);
      }
    }
  }
}
</style>

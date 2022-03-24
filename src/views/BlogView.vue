<template>
  <div id="page">
    <p id="title">{{ route.params.title }}</p>
    <div id="postscontainer">
      <div class="post" v-for="post of blogs.blogs[route.params.title].posts">
        <p>{{ post.upload.slice(0, 24) }}</p>
        <div v-html="post.data"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useBlogStore } from "../stores/stores";

const blogs = useBlogStore();
const route = useRoute();
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#page {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  background-color: $background;

  #title {
    margin: 50px;
    margin-bottom: 30px;
    font-size: 25px;
    font-weight: 800;
    width: 1000px;
  }

  .post {
    border: 1px solid $border;
    padding: 10px;
    border-radius: 10px;
    margin: 20px;
    background-color: $post;

    p {
      text-align: right;
      border-bottom: 1px solid $border;
      margin-bottom: 10px;
    }

    div {
      width: 1000px;
    }
  }
}
</style>

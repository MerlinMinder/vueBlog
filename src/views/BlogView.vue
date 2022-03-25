<template>
  <div id="page" v-if="blog1[route.params.title] != undefined">
    <div id="container">
      <p id="title">{{ blog1[route.params.title].title }}</p>
      <div id="img" v-html="blog1[route.params.title].img"></div>
    </div>
    <div id="postscontainer">
      <div class="post" v-for="post of blog1[route.params.title].posts">
        <p>{{ Date(post.upload).slice(0, 24) }}</p>
        <div v-html="post.data"></div>
      </div>
    </div>
  </div>
  <div v-else>{{ blog1 }}</div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useBlogStore } from "../stores/stores";
const route = useRoute();
const blogs = useBlogStore();
const blog1 = blogs.blogs;
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#page {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  background-color: $background;

  #container {
    display: flex;
    flex-direction: row;
    width: 1000px;
    margin: 50px 0px;
    align-items: center;

    #title {
      font-size: 30px;
      font-weight: 800;
      white-space: pre-wrap;
      text-align: center;
      margin-right: 30px;
    }

    #img {
      width: 200px;
      height: 180px;
    }
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

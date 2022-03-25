<template>
  <div id="page" v-if="blog1">
    <div class="blogshow">
      <div v-html="blog1['Blogwiz\nVue + Firebase'].img" class="blogimg"></div>
      <div class="title">
        {{ blog1["Blogwiz\nVue + Firebase"].title + "\n"
        }}<RouterLink
          class="link"
          :to="`/posts/${blog1['Blogwiz\nVue + Firebase'].title}`"
          >Visit Blog</RouterLink
        >
      </div>
    </div>
    <div class="blogshow">
      <div class="title">
        {{ blog1["Fitness App\n(My First App)"].title + "\n"
        }}<RouterLink
          class="link"
          :to="`/posts/${blog1['Fitness App\n(My First App)'].title}`"
          >Visit Blog</RouterLink
        >
      </div>
      <div
        v-html="blog1['Fitness App\n(My First App)'].img"
        class="blogimg right"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useBlogStore } from "../stores/stores";
import { RouterLink } from "vue-router";
const blogs = useBlogStore();
const blog1 = blogs.blogs;
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#page {
  background-color: $background;

  .blogshow {
    padding: 5vw;
    height: 45vw;
    display: flex;
    flex-direction: row;

    .blogimg {
      width: 45vw;
      height: 100%;
      align-items: center;
    }

    .title {
      width: 45vw;
      font-size: 4vw;
      font-weight: 800;
      margin-top: 8vw;
      white-space: pre-wrap;
      text-align: center;

      .link {
        font-size: 2vw;
        text-decoration: underline;
      }
    }
    .right {
      margin-right: 0px;
      margin-left: auto;
    }
  }
}
</style>

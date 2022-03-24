<template>
  <div id="body">
    <button @click="router.push('/')" id="back">Blogwiz</button>
    <div class="formcontainer">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import router from "../router";
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

#body {
  height: 100vh;
  background-color: $background;
  display: flex;
  align-items: center;
  justify-content: center;

  #back {
    position: absolute;
    top: 28px;
    left: 25px;
    font-size: 30px;
    font-weight: bold;
    color: $title;
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  .formcontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    padding: 35px 30px;
    border-radius: 20px;
    background-color: $form;
  }
}
</style>

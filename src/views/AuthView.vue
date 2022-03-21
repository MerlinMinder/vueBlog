<template>
  <div id="body">
    <button @click="router.push('/')" id="back">go back</button>
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
  background-color: $col-dark1;
  display: flex;
  align-items: center;
  justify-content: center;

  #back {
    position: absolute;
    top: 10vh;
    left: 10vh;
    padding: 10px;
    font-size: 20px;
    border-radius: 50px;

    &:hover {
      transform: scale(1.01);
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
    background-color: $col-lime;
  }
}
</style>

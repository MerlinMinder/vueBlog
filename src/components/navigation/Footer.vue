<template>
  <footer>
    <SocialLinksVue class="socials" />
    <RouterLinksVue class="routers" />
    <p id="copyright">Copyright 2022 All Righs Reserved</p>
  </footer>
</template>

<script setup>
import RouterLinksVue from "./RouterLinks.vue";
import SocialLinksVue from "./SocialLinks.vue";
</script>

<style lang="scss" scoped>
@import "../../assets/variables.scss";

footer {
  background-color: $navigation;
  padding: 25px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  bottom: 0;

  .routers {
    flex: 0;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    padding-top: 20px;
  }
  #copyright {
    margin-top: 106px;
    height: fit-content;
    padding: 25px;
    color: $text;
  }
}
</style>

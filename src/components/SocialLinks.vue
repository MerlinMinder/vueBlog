<template>
  <ul class="info">
    <p id="title">Blogwiz</p>
    <ul class="links">
      <a href="https://www.github.com" target="_blank"
        ><img
          src="../assets/icons/GitHub-Mark-Light-64px.png"
          alt="github logo white"
      /></a>
      <a href="https://www.linkedin.com" target="_blank"
        ><img
          src="../assets/icons/linkedin-logo-png-1837.png"
          alt="linkedin logo blue"
      /></a>
      <a href="https://www.vuejs.org" target="_blank"
        ><img src="../assets/icons/Vue.js_Logo_2.svg" alt="vuejs logo green"
      /></a>
      <a href="https://www.firebase.com" target="_blank"
        ><img
          src="../assets/icons/logo-logomark.svg"
          alt="firebase logo orange"
      /></a>
    </ul>
    <a href="#" target="_blank" id="mail">merlin@mail.com</a>
  </ul>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.info {
  padding: 25px;

  #title {
    font-size: 30px;
    font-weight: bold;
    color: $col-lime;
  }
  .links {
    margin: 10px 0px;
    img {
      height: 4vh;
      width: auto;
      margin-right: 10px;
    }
  }

  #mail {
    font-size: 16px;

    &:hover {
      color: $col-lime;
      font-weight: 800;
    }
  }
}
</style>

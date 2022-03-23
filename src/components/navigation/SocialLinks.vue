<template>
  <ul class="info">
    <p id="title">Blogwiz</p>
    <ul class="links">
      <a
        href="https://github.com/MerlinMinder/vueBlog"
        target="_blank"
        title="Github"
        ><img
          src="../../assets/icons/GitHub-Mark-Light-64px.png"
          alt="github logo white"
      /></a>
      <a
        href="https://www.linkedin.com/in/merlin-minder-489926234/"
        target="_blank"
        title="Linkedin"
        ><img
          src="../../assets/icons/linkedin-logo-png-1837.png"
          alt="linkedin logo blue"
      /></a>
      <a href="https://www.vuejs.org" target="_blank" title="Vuejs"
        ><img src="../../assets/icons/Vue.js_Logo_2.svg" alt="vuejs logo green"
      /></a>
      <a href="https://www.firebase.com" target="_blank" title="Firebase"
        ><img
          src="../../assets/icons/logo-logomark.svg"
          alt="firebase logo orange"
      /></a>
    </ul>
    <p>merlin.coding@gmail.com</p>
  </ul>
</template>

<style lang="scss" scoped>
@import "../../assets/variables.scss";
.info {
  padding: 25px;

  #title {
    font-size: 30px;
    font-weight: bold;
    color: $col-lime;
  }
  .links {
    margin: 10px 0px;
    height: 2.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      width: 2.2rem;
    }

    img {
      height: 2rem;
      width: auto;

      &:hover {
        height: 2.1rem;
      }
    }
  }
  p {
    color: $col-light;
  }
}
</style>
